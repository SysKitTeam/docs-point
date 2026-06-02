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
  if (!includeImages) {
    // Remove every image-bearing element and its caption so neither the image
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
  // Docusaurus wraps highlighted code in nested spans. Use textContent.
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
    while (
      inlineNodes.length === 0 &&
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

    if (isHeadingTag(tag)) {
      const level = Math.min(4, parseInt(tag[1], 10)) as 1 | 2 | 3 | 4;
      const runs = inlineFromElement(child, siteBase, pageUrl);
      if (runs.length) blocks.push({type: 'heading', level, runs});
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
              blocks.push({
                type: 'image',
                src: innerImg.currentSrc || innerImg.src,
                // The wrapper already renders a visible caption next to the
                // image, so don't repeat it ourselves — alt is left empty.
                alt: '',
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
