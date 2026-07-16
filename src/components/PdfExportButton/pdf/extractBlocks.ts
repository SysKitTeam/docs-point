/**
 * DOM -> typed `Block[]` extraction.
 *
 * Strips non-content chrome, then walks the cloned <article> tree producing
 * a flat list of blocks (heading, paragraph, list, table, code, admonition,
 * image, hr) for the renderer to consume.
 */

import type {Block, InlineRun, ListItem, TableCell, TableCellImage} from './types';
import {extractInline, inlineFromElement, normalizeRuns} from './extractInline';
import {collapse, isBlockTag, isHeadingTag} from './utils';

// --- Video extraction helper ----------------------------------------------

/** Map embed hostnames to a human-readable label and optional watch-URL builder. */
function resolveVideoUrl(
  src: string,
): {url: string; provider: string} | null {
  let parsed: URL;
  try { parsed = new URL(src); } catch { return null; }
  const host = parsed.hostname.replace(/^www\./, '');

  // YouTube
  const ytMatch = host.match(/youtube(?:-nocookie)?\.com/) ? src.match(/\/embed\/([^?/]+)/) : null;
  if (ytMatch) return {url: `https://www.youtube.com/watch?v=${ytMatch[1]}`, provider: 'YouTube'};
  if (host === 'youtu.be') return {url: src, provider: 'YouTube'};

  // Vimeo
  const vimeoMatch = host === 'player.vimeo.com' ? src.match(/\/video\/(\d+)/) : null;
  if (vimeoMatch) return {url: `https://vimeo.com/${vimeoMatch[1]}`, provider: 'Vimeo'};

  // Microsoft Stream / SharePoint embed
  if (host.endsWith('sharepoint.com') || host.endsWith('microsoftstream.com'))
    return {url: src, provider: 'Microsoft Stream'};

  // Loom
  if (host.endsWith('loom.com'))
    return {url: src.replace('/embed/', '/share/'), provider: 'Loom'};

  // Wistia
  if (host.endsWith('wistia.com') || host.endsWith('wistia.net'))
    return {url: src, provider: 'Wistia'};

  // Generic fallback — any other iframe with video-like attributes.
  return null;
}

function extractVideoBlock(
  iframe: HTMLElement,
): Extract<Block, {type: 'video'}> | null {
  const src = iframe.getAttribute('src') ?? '';
  if (!src) return null;

  const resolved = resolveVideoUrl(src);
  if (!resolved) return null;

  const title = (iframe.getAttribute('title') ?? '').trim();
  const genericTitles = ['', 'youtube video player', 'video player', 'embedded video'];
  const isGeneric = genericTitles.includes(title.toLowerCase());

  return {
    type: 'video',
    url: resolved.url,
    title: isGeneric ? `Watch video on ${resolved.provider}` : title,
  };
}

// --- DOM cleanup ----------------------------------------------------------

export function stripNonContent(
  clone: HTMLElement,
  includeImages: boolean,
): void {
  const selectors = [
    '.theme-doc-breadcrumbs',
    '.theme-doc-toc-mobile',
    '.theme-doc-toc-desktop',
    '.theme-doc-footer',
    '.pagination-nav',
    '[class*="docItemTOCMobile"]',
    '[data-pdf-exclude]',
    '.no-print',
    '[data-pdf-export-button]',
    'button.clean-btn', // copy-code buttons etc.
    '.hash-link', // permalink anchors next to headings
  ];
  for (const sel of selectors) {
    clone.querySelectorAll(sel).forEach((el) => el.remove());
  }

  // Replace known image-link buttons (e.g. the "Deploy to Azure" button)
  // with a plain text node so the surrounding <a> keeps visible link text.
  // This runs unconditionally: even with images enabled, an <a><img></a>
  // produces no extractable text for inline runs.
  clone.querySelectorAll('a > img').forEach((img) => {
    const src =
      img.getAttribute('src') || (img as HTMLImageElement).src || '';
    if (/deploytoazurebutton/i.test(src)) {
      const textNode = img.ownerDocument.createTextNode('Deploy to Azure');
      img.replaceWith(textNode);
    }
  });

  if (!includeImages) {
    // nor its alt text / figcaption leaks into a text-only export.
    // `.image-with-caption` is a runtime wrapper injected by
    // src/components/ImageCaptions which contains a visible `.caption` div
    // that would otherwise render as plain text.
    clone
      .querySelectorAll(
        'img, picture, svg, figure, figcaption, .image-with-caption, .caption',
      )
      .forEach((el) => el.remove());
  }
}

// --- Helpers --------------------------------------------------------------

function extractCodeLines(pre: HTMLElement): string[] {
  // Docusaurus wraps highlighted code in <span class="token-line"> elements.
  // Use those as line boundaries when available, because the SSR output may
  // not include literal \n characters between the spans.
  const tokenLines = pre.querySelectorAll('[class*="token-line"], .token-line');
  if (tokenLines.length > 0) {
    const lines: string[] = [];
    tokenLines.forEach((span) => {
      // Each token-line's textContent may end with \n — strip it.
      const text = (span.textContent ?? '').replace(/\n$/, '');
      lines.push(text);
    });
    // Remove trailing empty lines.
    while (lines.length && !lines[lines.length - 1]) lines.pop();
    return lines;
  }
  // Fallback: plain <pre> without syntax highlighting.
  const text = pre.textContent ?? '';
  return text.replace(/\r\n/g, '\n').replace(/\n+$/, '').split('\n');
}

function extractTable(
  table: HTMLTableElement,
  siteBase: string,
  pageUrl: string,
): {rows: TableCell[][]; header: boolean} {
  const rows: TableCell[][] = [];
  let header = false;
  const trs = Array.from(table.querySelectorAll('tr'));
  for (const tr of trs) {
    const cells = Array.from(tr.querySelectorAll('th, td')) as HTMLElement[];
    if (cells.length === 0) continue;
    if (cells.some((c) => c.tagName.toLowerCase() === 'th')) header = true;
    rows.push(
      cells.map((c) => {
        const imgs = Array.from(c.querySelectorAll('img')) as HTMLImageElement[];
        const images: TableCellImage[] = imgs.map((img) => ({
          src: img.currentSrc || img.src,
          alt: img.alt,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        }));
        return {
          images,
          runs: inlineFromElement(c, siteBase, pageUrl),
        };
      }),
    );
  }
  return {rows, header};
}

function extractAdmonition(
  el: HTMLElement,
  siteBase: string,
  pageUrl: string,
): {kind: string; title: string; children: Block[]} {
  const cls = el.className || '';
  const m = cls.match(/theme-admonition-(\w+)/);
  const kind = m ? m[1] : 'note';
  const titleEl = el.querySelector(
    '.admonitionHeading_node_modules-\\@docusaurus, .theme-admonition .admonitionHeading, [class*="admonitionHeading"]',
  ) as HTMLElement | null;
  const title = titleEl ? collapse(titleEl.textContent ?? '').trim() : kind;
  const contentEl = el.querySelector(
    '[class*="admonitionContent"]',
  ) as HTMLElement | null;
  const source = contentEl ?? el;
  const children = extractBlocks(source, siteBase, pageUrl);
  return {kind, title, children};
}

function extractList(
  el: HTMLElement,
  siteBase: string,
  pageUrl: string,
  level: number,
): Block {
  const ordered = el.tagName.toLowerCase() === 'ol';
  const items: ListItem[] = [];
  const lis = Array.from(el.children).filter(
    (c) => c.tagName.toLowerCase() === 'li',
  ) as HTMLElement[];
  for (const li of lis) {
    // Only take inline content that appears BEFORE the first block child.
    // Whitespace text nodes between/after blocks (e.g. the literal "\n"
    // between <strong>...</strong> and <ul>) would otherwise become
    // newline tokens and inject empty lines between list levels.
    const childNodes = Array.from(li.childNodes);
    let firstBlockIdx = childNodes.findIndex(
      (c) =>
        c.nodeType === Node.ELEMENT_NODE &&
        isBlockTag((c as HTMLElement).tagName.toLowerCase()),
    );
    if (firstBlockIdx === -1) firstBlockIdx = childNodes.length;

    let inlineNodes = childNodes.slice(0, firstBlockIdx);
    const blockChildren = childNodes
      .slice(firstBlockIdx)
      .filter(
        (c): c is HTMLElement =>
          c.nodeType === Node.ELEMENT_NODE &&
          isBlockTag((c as HTMLElement).tagName.toLowerCase()),
      );

    // Markdown "loose" lists wrap each item's text in <p>. Promote any
    // leading <p> children to inline runs so the bullet sits next to its
    // text instead of on its own line above a paragraph-spaced block.
    // Check for *meaningful* inline content — whitespace-only text nodes
    // (common in Docusaurus output between <li> and <p>) should not
    // prevent promotion.
    const hasVisibleInline = inlineNodes.some(
      (n) =>
        n.nodeType === Node.ELEMENT_NODE ||
        (n.textContent ?? '').trim() !== '',
    );
    while (
      !hasVisibleInline &&
      blockChildren.length > 0 &&
      blockChildren[0].tagName.toLowerCase() === 'p'
    ) {
      const p = blockChildren.shift() as HTMLElement;
      inlineNodes = Array.from(p.childNodes);
    }

    const runs: InlineRun[] = [];
    inlineNodes.forEach((n) =>
      extractInline(n, {}, siteBase, pageUrl, runs),
    );
    const itemBlocks: Block[] = [];
    for (const bc of blockChildren) {
      const t = bc.tagName.toLowerCase();
      if (t === 'ul' || t === 'ol') {
        itemBlocks.push(extractList(bc, siteBase, pageUrl, level + 1));
      } else {
        itemBlocks.push(...extractBlocks(bc, siteBase, pageUrl));
      }
    }
    items.push({runs: normalizeRuns(runs), children: itemBlocks});
  }
  return {type: 'list', ordered, items, level};
}

// --- Public extractor -----------------------------------------------------

export function extractBlocks(
  root: HTMLElement,
  siteBase: string,
  pageUrl: string,
): Block[] {
  const blocks: Block[] = [];

  for (const child of Array.from(root.children) as HTMLElement[]) {
    const tag = child.tagName.toLowerCase();

    // Admonitions are <div> wrappers we want to detect before generic <div>.
    if (
      child.classList.contains('theme-admonition') ||
      child.classList.contains('admonition')
    ) {
      const a = extractAdmonition(child, siteBase, pageUrl);
      blocks.push({type: 'admonition', ...a});
      continue;
    }

    // Detect embedded videos (YouTube iframes) and emit a video block.
    if (tag === 'iframe') {
      const vb = extractVideoBlock(child);
      if (vb) { blocks.push(vb); continue; }
    }
    // The responsive wrapper <div> that contains a YouTube iframe.
    // Only match shallow wrappers (iframe is a direct child) to avoid
    // consuming an entire content section that happens to contain a video.
    if (tag === 'div') {
      const iframe = child.querySelector(':scope > iframe') as HTMLIFrameElement | null;
      if (iframe) {
        const vb = extractVideoBlock(iframe);
        if (vb) { blocks.push(vb); continue; }
      }
    }

    if (isHeadingTag(tag)) {
      const level = Math.min(4, parseInt(tag[1], 10)) as 1 | 2 | 3 | 4;
      const runs = inlineFromElement(child, siteBase, pageUrl);
      const id = child.id || undefined;
      if (runs.length) blocks.push({type: 'heading', level, runs, id});
      continue;
    }

    if (tag === 'p') {
      // Markdown "![alt](src)" on its own line becomes <p><img/></p>.
      // Walk the <p>'s children so we can emit any <img>/<picture>/image-
      // with-caption wrapper as their own image block (otherwise
      // extractInline would silently drop them) and keep the remaining text
      // as a paragraph.
      let pending: InlineRun[] = [];
      const flushPending = () => {
        const normalized = normalizeRuns(pending);
        if (normalized.length) blocks.push({type: 'paragraph', runs: normalized});
        pending = [];
      };
      child.childNodes.forEach((n) => {
        if (n.nodeType === Node.ELEMENT_NODE) {
          const sub = n as HTMLElement;
          const subTag = sub.tagName.toLowerCase();
          if (subTag === 'img') {
            flushPending();
            const img = sub as HTMLImageElement;
            blocks.push({
              type: 'image',
              src: img.currentSrc || img.src,
              alt: img.alt,
            });
            return;
          }
          if (subTag === 'picture') {
            const innerImg = sub.querySelector('img');
            if (innerImg) {
              flushPending();
              blocks.push({
                type: 'image',
                src: innerImg.currentSrc || innerImg.src,
                alt: innerImg.alt,
              });
              return;
            }
          }
          if (sub.classList.contains('image-with-caption')) {
            const innerImg = sub.querySelector('img');
            if (innerImg) {
              flushPending();
              const captionEl = sub.querySelector('.caption');
              const captionText = captionEl
                ? (captionEl.textContent ?? '').trim()
                : innerImg.alt;
              blocks.push({
                type: 'image',
                src: innerImg.currentSrc || innerImg.src,
                alt: captionText,
              });
              return;
            }
          }
        }
        extractInline(n, {}, siteBase, pageUrl, pending);
      });
      flushPending();
      continue;
    }

    if (tag === 'ul' || tag === 'ol') {
      blocks.push(extractList(child, siteBase, pageUrl, 0));
      continue;
    }

    if (tag === 'pre') {
      blocks.push({type: 'code', lines: extractCodeLines(child)});
      continue;
    }

    if (tag === 'table') {
      const t = extractTable(child as HTMLTableElement, siteBase, pageUrl);
      blocks.push({type: 'table', ...t});
      continue;
    }

    if (tag === 'blockquote') {
      // Render as nested blocks inside an "info"-style admonition.
      const children = extractBlocks(child, siteBase, pageUrl);
      if (children.length)
        blocks.push({
          type: 'admonition',
          kind: 'note',
          title: 'Note',
          children,
        });
      continue;
    }

    if (tag === 'hr') {
      blocks.push({type: 'hr'});
      continue;
    }

    if (tag === 'img') {
      const img = child as unknown as HTMLImageElement;
      blocks.push({type: 'image', src: img.currentSrc || img.src, alt: img.alt});
      continue;
    }

    if (
      tag === 'figure' ||
      tag === 'div' ||
      tag === 'section' ||
      tag === 'article' ||
      tag === 'header' ||
      tag === 'main'
    ) {
      // image-with-caption wrapper: extract image + its caption text.
      if (child.classList.contains('image-with-caption')) {
        const innerImg = child.querySelector('img') as HTMLImageElement | null;
        if (innerImg) {
          const captionEl = child.querySelector('.caption');
          const captionText = captionEl
            ? (captionEl.textContent ?? '').trim()
            : innerImg.alt;
          blocks.push({
            type: 'image',
            src: innerImg.currentSrc || innerImg.src,
            alt: captionText,
          });
          continue;
        }
      }
      // Docusaurus tabs: interleave each tab title with its panel content
      // so the PDF reads "Title 1 / Content 1 / Title 2 / Content 2 …"
      // instead of "all titles / all content".
      if (child.classList.contains('tabs-container')) {
        const tabButtons = Array.from(
          child.querySelectorAll(':scope > ul[role="tablist"] > li[role="tab"]'),
        ) as HTMLElement[];
        const tabPanels = Array.from(
          child.querySelectorAll(':scope > div > [role="tabpanel"]'),
        ) as HTMLElement[];
        for (let t = 0; t < tabButtons.length; t++) {
          const label = collapse(tabButtons[t].textContent ?? '').trim();
          if (label) {
            blocks.push({
              type: 'heading',
              level: 4,
              runs: [{text: label}],
            });
          }
          if (t < tabPanels.length) {
            // Remove hidden attribute so content is extractable.
            tabPanels[t].removeAttribute('hidden');
            blocks.push(...extractBlocks(tabPanels[t], siteBase, pageUrl));
          }
        }
        continue;
      }
      // Recurse — also pick up any <img> directly inside.
      const directImg = child.querySelector(':scope > img') as HTMLImageElement | null;
      if (directImg && child.children.length === 1) {
        blocks.push({
          type: 'image',
          src: directImg.currentSrc || directImg.src,
          alt: directImg.alt,
        });
        continue;
      }
      blocks.push(...extractBlocks(child, siteBase, pageUrl));
      continue;
    }

    // Fallback: treat as paragraph if it has visible text.
    const runs = inlineFromElement(child, siteBase, pageUrl);
    if (runs.length) blocks.push({type: 'paragraph', runs});
  }

  return blocks;
}
