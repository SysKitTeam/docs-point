/**
 * Client-side PDF generator for Syskit Point doc articles.
 *
 * Renders the article into a PDF using jsPDF's native text APIs so the
 * resulting document contains real, selectable, searchable text (not a
 * rasterized snapshot).
 *
 * Approach:
 *  1. Clone the live <article>, strip non-content (TOC, breadcrumbs, footer,
 *     pagination, the export button itself).
 *  2. Walk the cloned DOM into a flat list of typed "blocks" (heading,
 *     paragraph, list, table, code, admonition, image, hr).
 *  3. Render each block with jsPDF's native text/draw primitives, handling
 *     word-wrap and page breaks manually so headers/footers stay clean.
 *  4. Hyperlinks are kept inline (clickable and rendered with `textWithLink`)
 *     AND collected into a numbered "Related links" appendix at the end.
 *  5. Images are optionally embedded via an in-memory <canvas> -> data URL.
 *     No third-party rasterizer is used; if an image taints the canvas
 *     (cross-origin without CORS) it is replaced by a "[image]" placeholder.
 */

import type {jsPDF as JsPDFType} from 'jspdf';

export interface PdfBreadcrumb {
  label: string;
}

export interface GeneratePdfOptions {
  articleEl: HTMLElement;
  title: string;
  sourceUrl: string;
  siteBase: string;
  breadcrumbs: PdfBreadcrumb[];
  includeImages: boolean;
  exportDate: string;
}

// --- Page geometry --------------------------------------------------------

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const MARGIN_TOP_MM = 22;
const MARGIN_BOTTOM_MM = 22;
const MARGIN_X_MM = 15;
const CONTENT_WIDTH_MM = A4_WIDTH_MM - MARGIN_X_MM * 2;
const CONTENT_BOTTOM_MM = A4_HEIGHT_MM - MARGIN_BOTTOM_MM;

// Syskit Point primary color (matches --ifm-color-primary in custom.css).
const PRIMARY_RGB: [number, number, number] = [87, 0, 175];
const TEXT_RGB: [number, number, number] = [26, 26, 26];
const MUTED_RGB: [number, number, number] = [110, 110, 110];
const CODE_BG_RGB: [number, number, number] = [244, 244, 244];
const CODE_BORDER_RGB: [number, number, number] = [220, 220, 220];

// Typography (pt). jsPDF uses pt for font sizes; 1 pt ≈ 0.3528 mm.
const FONT_BODY = 10;
const FONT_H1 = 18;
const FONT_H2 = 14;
const FONT_H3 = 12;
const FONT_H4 = 11;
const FONT_CODE = 9;
const FONT_SMALL = 9;

// Vertical rhythm helpers (line-height factor).
const LINE_HEIGHT_FACTOR = 1.35;
const PARAGRAPH_GAP_MM = 2.5;
const HEADING_GAP_BEFORE_MM = 4.5;
const HEADING_GAP_AFTER_MM = 1.5;
const LIST_INDENT_MM = 6;

// --- Public types ---------------------------------------------------------

interface InlineRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string; // absolute URL when this run is a link
}

type Block =
  | {type: 'heading'; level: 1 | 2 | 3 | 4; runs: InlineRun[]}
  | {type: 'paragraph'; runs: InlineRun[]}
  | {type: 'list'; ordered: boolean; items: ListItem[]; level: number}
  | {type: 'code'; lines: string[]}
  | {type: 'table'; rows: TableCell[][]; header: boolean}
  | {type: 'admonition'; kind: string; title: string; children: Block[]}
  | {type: 'image'; src: string; alt: string}
  | {type: 'hr'};

interface ListItem {
  runs: InlineRun[];
  children: Block[]; // nested lists or sub-blocks
}

interface TableCellImage {
  src: string;
  alt: string;
  naturalWidth: number;
  naturalHeight: number;
}

interface TableCell {
  images: TableCellImage[];
  runs: InlineRun[];
}

// --- Filename utility -----------------------------------------------------

export function sanitizeFilename(title: string): string {
  return (
    title
      .replace(/[\\/:*?"<>|]+/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase() || 'syskit-point-article'
  );
}

function collapse(text: string): string {
  return text.replace(/\s+/g, ' ');
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

// --- DOM cleanup ----------------------------------------------------------

function stripNonContent(clone: HTMLElement, includeImages: boolean): void {
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

// --- Link normalization ---------------------------------------------------

function isFootnoteCandidate(href: string): boolean {
  if (!href) return false;
  const trimmed = href.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('#')) return false;
  if (/^(mailto:|tel:|javascript:)/i.test(trimmed)) return false;
  return true;
}

function toAbsoluteUrl(href: string, siteBase: string, pageUrl: string): string {
  try {
    return new URL(href, pageUrl).toString();
  } catch {
    try {
      return new URL(href, siteBase).toString();
    } catch {
      return href;
    }
  }
}

// --- Inline extraction ----------------------------------------------------

interface InlineContext {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string;
}

function extractInline(
  node: Node,
  ctx: InlineContext,
  siteBase: string,
  pageUrl: string,
  out: InlineRun[],
): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = (node.textContent ?? '').replace(/\u00ad/g, ''); // soft hyphen
    if (!text) return;
    out.push({
      text,
      bold: ctx.bold,
      italic: ctx.italic,
      code: ctx.code,
      href: ctx.href,
    });
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const el = node as HTMLElement;
  const tag = el.tagName.toLowerCase();

  // Skip elements that shouldn't appear inline.
  if (tag === 'br') {
    out.push({text: '\n'});
    return;
  }
  if (tag === 'script' || tag === 'style') return;

  const nextCtx: InlineContext = {...ctx};
  if (tag === 'strong' || tag === 'b') nextCtx.bold = true;
  if (tag === 'em' || tag === 'i') nextCtx.italic = true;
  if (tag === 'code' && !ctx.code) nextCtx.code = true;
  if (tag === 'a') {
    const raw = el.getAttribute('href') ?? '';
    if (isFootnoteCandidate(raw)) {
      nextCtx.href = toAbsoluteUrl(raw, siteBase, pageUrl);
    }
  }

  el.childNodes.forEach((child) =>
    extractInline(child, nextCtx, siteBase, pageUrl, out),
  );
}

function inlineFromElement(
  el: HTMLElement,
  siteBase: string,
  pageUrl: string,
): InlineRun[] {
  const runs: InlineRun[] = [];
  el.childNodes.forEach((child) =>
    extractInline(child, {}, siteBase, pageUrl, runs),
  );
  return normalizeRuns(runs);
}

/** Merge adjacent runs with identical styling and collapse whitespace. */
function normalizeRuns(runs: InlineRun[]): InlineRun[] {
  const out: InlineRun[] = [];
  for (const r of runs) {
    if (!r.text) continue;
    // Preserve explicit \n (from <br>) — split into its own run.
    const parts = r.text.split(/(\n)/);
    for (const part of parts) {
      if (!part) continue;
      const piece: InlineRun = {
        text: part === '\n' ? '\n' : collapse(part),
        bold: r.bold,
        italic: r.italic,
        code: r.code,
        href: r.href,
      };
      if (!piece.text) continue;
      const prev = out[out.length - 1];
      if (
        prev &&
        prev.bold === piece.bold &&
        prev.italic === piece.italic &&
        prev.code === piece.code &&
        prev.href === piece.href &&
        prev.text !== '\n' &&
        piece.text !== '\n'
      ) {
        prev.text += piece.text;
      } else {
        out.push(piece);
      }
    }
  }
  // Trim leading/trailing whitespace-only runs.
  while (out.length && !out[0].text.trim() && out[0].text !== '\n') out.shift();
  while (
    out.length &&
    !out[out.length - 1].text.trim() &&
    out[out.length - 1].text !== '\n'
  )
    out.pop();
  return out;
}

// --- Block extraction -----------------------------------------------------

function isHeadingTag(tag: string): tag is 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' {
  return /^h[1-6]$/.test(tag);
}

function isBlockTag(tag: string): boolean {
  return (
    isHeadingTag(tag) ||
    [
      'p',
      'ul',
      'ol',
      'pre',
      'table',
      'blockquote',
      'hr',
      'figure',
      'div',
      'section',
      'article',
    ].includes(tag)
  );
}

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

function extractBlocks(
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

// --- Renderer -------------------------------------------------------------

class Renderer {
  doc: JsPDFType;
  y: number = MARGIN_TOP_MM;
  private includeImages: boolean;
  private siteBase: string;
  // Headings captured during content rendering, used afterwards to build
  // the table of contents and the PDF outline / bookmarks panel.
  // `page` is the absolute page index at the time of rendering; it is
  // shifted forward by the TOC page count when the TOC is inserted.
  readonly headings: {level: number; text: string; page: number; y: number}[] = [];

  constructor(doc: JsPDFType, includeImages: boolean, siteBase: string) {
    this.doc = doc;
    this.includeImages = includeImages;
    this.siteBase = siteBase;
  }

  ensureSpace(mm: number): void {
    if (this.y + mm > CONTENT_BOTTOM_MM) {
      this.doc.addPage();
      this.y = MARGIN_TOP_MM;
    }
  }

  // --- Block dispatch ---
  renderBlocks(blocks: Block[], indent = 0, maxWidth = CONTENT_WIDTH_MM): void {
    for (const b of blocks) this.renderBlock(b, indent, maxWidth);
  }

  renderBlock(b: Block, indent: number, maxWidth: number): void {
    switch (b.type) {
      case 'heading':
        this.renderHeading(b.level, b.runs);
        break;
      case 'paragraph':
        this.renderParagraph(b.runs, indent, maxWidth);
        break;
      case 'list':
        this.renderList(b, indent, maxWidth);
        break;
      case 'code':
        this.renderCode(b.lines, indent, maxWidth);
        break;
      case 'table':
        this.renderTable(b.rows, b.header, indent, maxWidth);
        break;
      case 'admonition':
        this.renderAdmonition(b.kind, b.title, b.children, indent, maxWidth);
        break;
      case 'image':
        if (this.includeImages) this.renderImage(b.src, b.alt, indent, maxWidth);
        break;
      case 'hr':
        this.renderHr();
        break;
    }
  }

  // --- Headings ---
  // Render as a single native text call (no per-token positioning) so the
  // font's natural kerning is preserved — token-by-token placement caused
  // visibly wider letter spacing at larger sizes (H2 in particular).
  renderHeading(level: 1 | 2 | 3 | 4, runs: InlineRun[]): void {
    const size =
      level === 1 ? FONT_H1 : level === 2 ? FONT_H2 : level === 3 ? FONT_H3 : FONT_H4;
    const lineHeight = (size * LINE_HEIGHT_FACTOR) / 2.83465; // pt -> mm

    this.y += HEADING_GAP_BEFORE_MM;

    this.doc.setFont('helvetica', 'bold');
    this.doc.setFontSize(size);
    this.doc.setTextColor(...PRIMARY_RGB);

    const plain = runsToPlainText(runs).replace(/[\u200b\u200c\u200d\ufeff]/g, '').trim();
    if (!plain) return;
    const lines = this.doc.splitTextToSize(plain, CONTENT_WIDTH_MM) as string[];

    // Record the heading position BEFORE drawing the first line, so the TOC
    // link / outline bookmark points to the top of the heading.
    let firstDrawn = false;
    for (const ln of lines) {
      this.ensureSpace(lineHeight);
      if (!firstDrawn) {
        this.headings.push({
          level,
          text: plain,
          page: this.doc.getCurrentPageInfo().pageNumber,
          y: this.y,
        });
        firstDrawn = true;
      }
      this.doc.text(ln, MARGIN_X_MM, this.y + lineHeight - 1);
      this.y += lineHeight;
    }
    this.y += HEADING_GAP_AFTER_MM;
  }

  // --- Paragraph ---
  renderParagraph(runs: InlineRun[], indent: number, maxWidth: number): void {
    const x = MARGIN_X_MM + indent;
    const width = maxWidth - indent;
    this.layoutInlineRuns(runs, x, width, {
      fontSize: FONT_BODY,
      color: TEXT_RGB,
    });
    this.y += PARAGRAPH_GAP_MM;
  }

  // --- Lists ---
  renderList(b: Extract<Block, {type: 'list'}>, indent: number, maxWidth: number): void {
    const startIndent = indent;
    let i = 0;
    for (const item of b.items) {
      i++;
      const marker = b.ordered ? `${i}.` : '\u2022';
      const itemIndent = startIndent + LIST_INDENT_MM;
      const width = maxWidth - LIST_INDENT_MM;

      const lineHeight = (FONT_BODY * LINE_HEIGHT_FACTOR) / 2.83465;
      this.ensureSpace(lineHeight);

      // Draw marker
      this.doc.setFont('helvetica', 'normal');
      this.doc.setFontSize(FONT_BODY);
      this.doc.setTextColor(...TEXT_RGB);
      this.doc.text(marker, MARGIN_X_MM + startIndent, this.y + lineHeight - 1);

      // Render item text
      const startY = this.y;
      this.layoutInlineRuns(item.runs, MARGIN_X_MM + itemIndent, width, {
        fontSize: FONT_BODY,
        color: TEXT_RGB,
      });
      if (this.y === startY) this.y += lineHeight; // empty item safety

      // Nested blocks
      if (item.children.length) {
        this.y += 1;
        this.renderBlocks(item.children, itemIndent, maxWidth - LIST_INDENT_MM);
      } else {
        this.y += 0.5;
      }
    }
    this.y += PARAGRAPH_GAP_MM;
  }

  // --- Code ---
  renderCode(lines: string[], indent: number, maxWidth: number): void {
    const x = MARGIN_X_MM + indent;
    const width = maxWidth - indent;
    const padding = 2;
    const lineHeight = (FONT_CODE * LINE_HEIGHT_FACTOR) / 2.83465;

    this.doc.setFont('courier', 'normal');
    this.doc.setFontSize(FONT_CODE);

    // Pre-wrap each line to width (in mm), then render as a single bordered box.
    const wrapped: string[] = [];
    for (const ln of lines) {
      const parts = this.doc.splitTextToSize(
        ln === '' ? ' ' : ln,
        width - padding * 2,
      ) as string[];
      wrapped.push(...parts);
    }

    let idx = 0;
    while (idx < wrapped.length) {
      const available = CONTENT_BOTTOM_MM - this.y;
      const linesPerPage = Math.max(
        1,
        Math.floor((available - padding * 2) / lineHeight),
      );
      const chunk = wrapped.slice(idx, idx + linesPerPage);
      const boxHeight = chunk.length * lineHeight + padding * 2;

      this.doc.setFillColor(...CODE_BG_RGB);
      this.doc.setDrawColor(...CODE_BORDER_RGB);
      this.doc.setLineWidth(0.2);
      this.doc.roundedRect(x, this.y, width, boxHeight, 1, 1, 'FD');

      this.doc.setTextColor(...TEXT_RGB);
      this.doc.setFont('courier', 'normal');
      this.doc.setFontSize(FONT_CODE);
      let yLine = this.y + padding + lineHeight - 1;
      for (const ln of chunk) {
        this.doc.text(ln, x + padding, yLine);
        yLine += lineHeight;
      }
      this.y += boxHeight + 0.5;
      idx += chunk.length;
      if (idx < wrapped.length) {
        this.doc.addPage();
        this.y = MARGIN_TOP_MM;
      }
    }
    this.y += PARAGRAPH_GAP_MM;
  }

  // --- Tables ---
  renderTable(
    rows: TableCell[][],
    header: boolean,
    indent: number,
    maxWidth: number,
  ): void {
    if (!rows.length) return;
    const x = MARGIN_X_MM + indent;
    const width = maxWidth - indent;
    const colCount = Math.max(...rows.map((r) => r.length));
    const colWidth = width / colCount;
    const cellPadding = 1.5;
    const lineHeight = (FONT_SMALL * LINE_HEIGHT_FACTOR) / 2.83465;
    // Cap embedded cell images so a single oversized icon doesn't blow up
    // the row height.
    const MAX_CELL_IMG_H_MM = 16;

    // Precompute, per cell, the rendered images (data + mm dimensions) and
    // the wrapped text lines so we can determine row heights ahead of
    // painting borders.
    interface RenderedCellImage {
      data: ImageData;
      wMm: number;
      hMm: number;
    }
    interface PreparedCell {
      images: RenderedCellImage[];
      lines: string[];
      imagesBlockH: number; // total mm taken by stacked images
    }

    for (let rIdx = 0; rIdx < rows.length; rIdx++) {
      const row = rows[rIdx];
      const isHeaderRow = header && rIdx === 0;

      this.doc.setFont('helvetica', isHeaderRow ? 'bold' : 'normal');
      this.doc.setFontSize(FONT_SMALL);

      const prepared: PreparedCell[] = row.map((cell) => {
        const maxImgW = colWidth - cellPadding * 2;
        const images: RenderedCellImage[] = [];
        if (this.includeImages) {
          for (const im of cell.images) {
            const data = imageToDataUrl(im.src);
            if (!data) continue;
            const w = data.width || im.naturalWidth || 1;
            const h = data.height || im.naturalHeight || 1;
            const naturalWmm = (w * 25.4) / 96;
            const naturalHmm = (h * 25.4) / 96;
            let wMm = Math.min(naturalWmm, maxImgW);
            let hMm = (wMm * h) / w;
            if (hMm > MAX_CELL_IMG_H_MM) {
              hMm = MAX_CELL_IMG_H_MM;
              wMm = (hMm * w) / h;
            }
            images.push({data, wMm, hMm});
          }
        }
        const text = runsToPlainText(cell.runs);
        const lines = this.doc.splitTextToSize(
          text || (images.length ? '' : ' '),
          colWidth - cellPadding * 2,
        ) as string[];
        const imagesBlockH = images.reduce(
          (acc, im, i) => acc + im.hMm + (i > 0 ? 1 : 0),
          0,
        );
        return {images, lines, imagesBlockH};
      });
      while (prepared.length < colCount) {
        prepared.push({images: [], lines: [' '], imagesBlockH: 0});
      }

      const rowContentHeights = prepared.map((p) => {
        const textH = p.lines.length * lineHeight;
        const gap = p.images.length > 0 && p.lines.some((l) => l.trim()) ? 1.5 : 0;
        return p.imagesBlockH + gap + textH;
      });
      const rowHeight = Math.max(...rowContentHeights) + cellPadding * 2;

      // Page break if needed.
      if (this.y + rowHeight > CONTENT_BOTTOM_MM) {
        this.doc.addPage();
        this.y = MARGIN_TOP_MM;
      }

      // Background for header row.
      if (isHeaderRow) {
        this.doc.setFillColor(...CODE_BG_RGB);
        this.doc.rect(x, this.y, colWidth * colCount, rowHeight, 'F');
      }
      this.doc.setDrawColor(...CODE_BORDER_RGB);
      this.doc.setLineWidth(0.2);
      // Borders for each cell.
      for (let c = 0; c < colCount; c++) {
        this.doc.rect(x + c * colWidth, this.y, colWidth, rowHeight);
      }
      // Cell content.
      this.doc.setTextColor(...TEXT_RGB);
      for (let c = 0; c < colCount; c++) {
        const p = prepared[c];
        const cellX = x + c * colWidth + cellPadding;
        let cellY = this.y + cellPadding;
        for (let i = 0; i < p.images.length; i++) {
          const im = p.images[i];
          if (i > 0) cellY += 1;
          this.doc.addImage(im.data.url, im.data.format, cellX, cellY, im.wMm, im.hMm);
          cellY += im.hMm;
        }
        const hasText = p.lines.some((l) => l.trim());
        if (hasText && p.images.length > 0) cellY += 1.5;
        if (hasText) {
          // Reset font for text in each cell.
          this.doc.setFont('helvetica', isHeaderRow ? 'bold' : 'normal');
          this.doc.setFontSize(FONT_SMALL);
          let yLine = cellY + lineHeight - 1;
          for (const ln of p.lines) {
            this.doc.text(ln, cellX, yLine);
            yLine += lineHeight;
          }
        }
      }
      this.y += rowHeight;
    }
    this.y += PARAGRAPH_GAP_MM;
  }

  // --- Admonitions ---
  // Tinted background panel with a slim colored left accent bar. No title
  // row, no outer border — the bar + fill alone signal the callout.
  renderAdmonition(
    kind: string,
    _title: string,
    children: Block[],
    indent: number,
    maxWidth: number,
  ): void {
    const color = admonitionColor(kind);
    const x = MARGIN_X_MM + indent;
    const width = maxWidth - indent;

    const barWidth = 0.8;
    const padX = 4;
    const padTop = 3;
    const padBottom = 3;

    this.ensureSpace(padTop + padBottom + 4);

    const startY = this.y;
    const startPage = this.doc.getCurrentPageInfo().pageNumber;

    // Render body content with internal padding & indent past the bar.
    this.y = startY + padTop;
    const contentIndent = indent + barWidth + padX;
    const contentWidth = maxWidth - barWidth - padX * 2;
    this.renderBlocks(children, contentIndent, contentWidth);

    const endPage = this.doc.getCurrentPageInfo().pageNumber;
    const endY = Math.min(
      this.y + padBottom - PARAGRAPH_GAP_MM,
      CONTENT_BOTTOM_MM,
    );

    // Draw chrome (tinted background + left bar) for every page the
    // admonition spans.
    for (let p = startPage; p <= endPage; p++) {
      this.doc.setPage(p);
      const top = p === startPage ? startY : MARGIN_TOP_MM;
      const bottom = p === endPage ? endY : CONTENT_BOTTOM_MM;
      const h = bottom - top;
      if (h <= 0) continue;

      const docAny = this.doc as unknown as {
        GState?: new (opts: {opacity: number}) => unknown;
        setGState?: (g: unknown) => void;
        saveGraphicsState?: () => void;
        restoreGraphicsState?: () => void;
      };
      if (
        typeof docAny.GState === 'function' &&
        typeof docAny.setGState === 'function' &&
        typeof docAny.saveGraphicsState === 'function' &&
        typeof docAny.restoreGraphicsState === 'function'
      ) {
        docAny.saveGraphicsState();
        docAny.setGState(new docAny.GState({opacity: 0.08}));
        this.doc.setFillColor(...color);
        this.doc.rect(x, top, width, h, 'F');
        docAny.restoreGraphicsState();
      } else {
        this.doc.setFillColor(...tintColor(color, 0.92));
        this.doc.rect(x, top, width, h, 'F');
      }

      // Slim colored left bar.
      this.doc.setFillColor(...color);
      this.doc.rect(x, top, barWidth, h, 'F');
    }

    this.doc.setPage(endPage);
    this.doc.setDrawColor(220);
    this.doc.setLineWidth(0.2);
    this.y = endY + PARAGRAPH_GAP_MM;
  }

  // --- Image ---
  renderImage(src: string, alt: string, indent: number, maxWidth: number): void {
    if (!src) return;
    const data = imageToDataUrl(src);
    if (!data) {
      // Skip silently — too noisy to render every missing image as a placeholder.
      return;
    }
    const x = MARGIN_X_MM + indent;
    const width = maxWidth - indent;

    // Aspect ratio from natural dimensions.
    const ratio = data.height && data.width ? data.height / data.width : 0.6;
    const targetW = Math.min(width, (data.width * 25.4) / 96);
    const targetH = targetW * ratio;

    // Page break if the image is taller than remaining space.
    if (this.y + targetH > CONTENT_BOTTOM_MM) {
      // If it's also taller than a full page, scale down to fit.
      const maxPageH = CONTENT_BOTTOM_MM - MARGIN_TOP_MM;
      if (targetH > maxPageH) {
        const scaledH = maxPageH;
        const scaledW = scaledH / ratio;
        this.doc.addPage();
        this.y = MARGIN_TOP_MM;
        this.doc.addImage(
          data.url,
          data.format,
          x,
          this.y,
          Math.min(scaledW, width),
          scaledH,
        );
        this.y += scaledH + PARAGRAPH_GAP_MM;
        return;
      }
      this.doc.addPage();
      this.y = MARGIN_TOP_MM;
    }
    this.doc.addImage(data.url, data.format, x, this.y, targetW, targetH);
    this.y += targetH + PARAGRAPH_GAP_MM;
    if (alt) {
      // Caption (small, muted).
      this.doc.setFont('helvetica', 'italic');
      this.doc.setFontSize(FONT_SMALL);
      this.doc.setTextColor(...MUTED_RGB);
      const lines = this.doc.splitTextToSize(alt, width) as string[];
      const lh = (FONT_SMALL * LINE_HEIGHT_FACTOR) / 2.83465;
      for (const ln of lines) {
        this.ensureSpace(lh);
        this.doc.text(ln, x, this.y + lh - 1);
        this.y += lh;
      }
      this.y += PARAGRAPH_GAP_MM;
    }
  }

  renderHr(): void {
    this.ensureSpace(4);
    this.doc.setDrawColor(...CODE_BORDER_RGB);
    this.doc.setLineWidth(0.2);
    this.doc.line(
      MARGIN_X_MM,
      this.y + 1,
      MARGIN_X_MM + CONTENT_WIDTH_MM,
      this.y + 1,
    );
    this.y += 4;
  }

  // --- Inline layout (the workhorse) ---
  layoutInlineRuns(
    runs: InlineRun[],
    x: number,
    width: number,
    style: {
      fontSize: number;
      bold?: boolean;
      italic?: boolean;
      color: [number, number, number];
    },
  ): void {
    if (!runs.length) return;
    const lineHeight = (style.fontSize * LINE_HEIGHT_FACTOR) / 2.83465;

    // Tokenize each run into pieces: words + single spaces + explicit newlines.
    // Each token carries the styling of its run so we can apply per-token fonts.
    interface Token {
      text: string;
      isSpace: boolean;
      isNewline: boolean;
      run: InlineRun;
    }
    const tokens: Token[] = [];
    for (const run of runs) {
      if (run.text === '\n') {
        tokens.push({text: '\n', isSpace: false, isNewline: true, run});
        continue;
      }
      const parts = run.text.split(/(\s+)/);
      for (const p of parts) {
        if (!p) continue;
        if (/^\s+$/.test(p)) {
          tokens.push({text: ' ', isSpace: true, isNewline: false, run});
        } else {
          tokens.push({text: p, isSpace: false, isNewline: false, run});
        }
      }
    }

    const setFontFor = (run: InlineRun): void => {
      const family = run.code ? 'courier' : 'helvetica';
      const weight =
        (run.bold || style.bold) && (run.italic || style.italic)
          ? 'bolditalic'
          : run.bold || style.bold
            ? 'bold'
            : run.italic || style.italic
              ? 'italic'
              : 'normal';
      this.doc.setFont(family, weight);
      this.doc.setFontSize(style.fontSize);
    };

    const measure = (text: string, run: InlineRun): number => {
      setFontFor(run);
      return this.doc.getTextWidth(text);
    };

    // Greedy line filling.
    interface PlacedToken {
      text: string;
      x: number;
      width: number;
      run: InlineRun;
    }
    let curLine: PlacedToken[] = [];
    let curX = 0;

    const flushLine = (lastLine: boolean): void => {
      // Page break check.
      this.ensureSpace(lineHeight);
      const baselineY = this.y + lineHeight - 1;

      // Paint tokens, merging adjacent same-style tokens into single text calls
      // for tighter kerning and cleaner link rectangles.
      let i = 0;
      while (i < curLine.length) {
        const tok = curLine[i];
        // Skip pure leading spaces at line start.
        if (tok.isSpace && i === 0) {
          i++;
          continue;
        }
        const groupRun = tok.run;
        let groupText = tok.text;
        let groupX = tok.x;
        let j = i + 1;
        while (
          j < curLine.length &&
          sameStyle(curLine[j].run, groupRun) &&
          // Don't extend across leading trim boundary.
          !(curLine[j].isSpace && j === curLine.length - 1 && lastLine)
        ) {
          groupText += curLine[j].text;
          j++;
        }
        setFontFor(groupRun);
        const linkColor = groupRun.href ? PRIMARY_RGB : style.color;
        this.doc.setTextColor(...linkColor);
        if (groupRun.href) {
          this.doc.textWithLink(groupText, groupX, baselineY, {
            url: groupRun.href,
          });
          // Underline the link segment.
          const w = this.doc.getTextWidth(groupText);
          this.doc.setDrawColor(...linkColor);
          this.doc.setLineWidth(0.1);
          this.doc.line(groupX, baselineY + 0.6, groupX + w, baselineY + 0.6);
        } else {
          this.doc.text(groupText, groupX, baselineY);
        }
        i = j;
      }

      this.y += lineHeight;
      curLine = [];
      curX = 0;
    };

    for (const tok of tokens) {
      if (tok.isNewline) {
        flushLine(false);
        continue;
      }
      const w = measure(tok.text, tok.run);
      if (curX + w > width && curLine.length > 0) {
        flushLine(false);
      }
      curLine.push({
        text: tok.text,
        x: x + curX,
        width: w,
        run: tok.run,
      });
      curX += w;
    }
    if (curLine.length) flushLine(true);
  }
}

function sameStyle(a: InlineRun, b: InlineRun): boolean {
  return (
    !!a.bold === !!b.bold &&
    !!a.italic === !!b.italic &&
    !!a.code === !!b.code &&
    a.href === b.href
  );
}

function runsToPlainText(runs: InlineRun[]): string {
  return runs.map((r) => r.text).join('').replace(/\s+/g, ' ').trim();
}

function admonitionColor(kind: string): [number, number, number] {
  switch (kind.toLowerCase()) {
    case 'warning':
    case 'caution':
      return [217, 119, 6]; // amber
    case 'danger':
      return [200, 32, 32]; // red
    case 'tip':
    case 'success':
      return [22, 128, 73]; // green
    case 'info':
    case 'note':
    default:
      return PRIMARY_RGB;
  }
}

/**
 * Mix the given RGB color toward white by `amount` (0 = original, 1 = white).
 * Used as a fallback for the admonition background tint when the PDF viewer
 * does not honor jsPDF's GState opacity plugin.
 */
function tintColor(
  rgb: [number, number, number],
  amount: number,
): [number, number, number] {
  const t = Math.max(0, Math.min(1, amount));
  const mix = (c: number) => Math.round(c + (255 - c) * t);
  return [mix(rgb[0]), mix(rgb[1]), mix(rgb[2])];
}

// --- Image -> data URL via in-memory canvas -------------------------------

interface ImageData {
  url: string;
  format: 'PNG' | 'JPEG';
  width: number;
  height: number;
}

/**
 * Force any lazy-loaded images inside the article to decode so the
 * synchronous renderer can paint them. Uses HTMLImageElement.decode() with
 * a per-image timeout so the export never hangs on a slow/missing image.
 */
async function preloadArticleImages(articleEl: HTMLElement): Promise<void> {
  const imgs = Array.from(articleEl.querySelectorAll('img'));
  const TIMEOUT_MS = 5000;
  await Promise.all(
    imgs.map((img) => {
      // Promote lazy images so the browser starts loading them now.
      if (img.loading === 'lazy') img.loading = 'eager';
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      const decodePromise =
        typeof img.decode === 'function'
          ? img.decode().catch(() => undefined)
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), {once: true});
              img.addEventListener('error', () => resolve(), {once: true});
            });
      const timeout = new Promise<void>((resolve) =>
        setTimeout(resolve, TIMEOUT_MS),
      );
      return Promise.race([decodePromise, timeout]);
    }),
  );
}

/**
 * Convert a same-origin <img> into a data URL using a transient <canvas>.
 * Returns null for images that taint the canvas (cross-origin without CORS)
 * or fail to load — the renderer then silently skips them.
 *
 * We look up the live image element on the page (by src match) so the browser
 * has already loaded & decoded it; we never trigger a fresh network request.
 */
function imageToDataUrl(src: string): ImageData | null {
  if (!src) return null;
  // Find a matching live <img> that is already decoded so we don't re-fetch.
  // Match against currentSrc OR src — a cloned <img> may report only one of
  // them depending on whether srcset/picture was involved.
  const matches = Array.from(document.images).filter((i) => {
    const liveSrc = i.currentSrc || i.src;
    return liveSrc === src || i.src === src || i.currentSrc === src;
  });
  const img = matches.find((i) => i.complete && i.naturalWidth > 0) ?? matches[0];
  if (!img || !img.complete || !img.naturalWidth) return null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0);
    // toDataURL throws SecurityError for tainted canvases.
    const url = canvas.toDataURL('image/png');
    return {
      url,
      format: 'PNG',
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  } catch {
    return null;
  }
}

// --- Header / footer ------------------------------------------------------

export function drawHeaderFooter(
  doc: JsPDFType,
  breadcrumbText: string,
  sourceUrl: string,
  exportDate: string,
  options: {skipFirst?: boolean; skipLast?: boolean} = {},
): void {
  const total = doc.getNumberOfPages();
  const firstChromedPage = options.skipFirst ? 2 : 1;
  const lastChromedPage = options.skipLast ? total - 1 : total;
  for (let i = firstChromedPage; i <= lastChromedPage; i++) {
    doc.setPage(i);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...PRIMARY_RGB);
    doc.text('Syskit Point', MARGIN_X_MM, 12);

    if (breadcrumbText) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...MUTED_RGB);
      doc.text(truncate(breadcrumbText, 90), A4_WIDTH_MM - MARGIN_X_MM, 12, {
        align: 'right',
      });
    }

    doc.setDrawColor(220);
    doc.setLineWidth(0.2);
    doc.line(MARGIN_X_MM, 15, A4_WIDTH_MM - MARGIN_X_MM, 15);

    const footerLine1Y = A4_HEIGHT_MM - 12;
    const footerLine2Y = A4_HEIGHT_MM - 7;
    doc.line(
      MARGIN_X_MM,
      footerLine1Y - 4,
      A4_WIDTH_MM - MARGIN_X_MM,
      footerLine1Y - 4,
    );

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...MUTED_RGB);
    doc.text('Source: ', MARGIN_X_MM, footerLine1Y);
    const sourceLabelWidth = doc.getTextWidth('Source: ');
    doc.setTextColor(...PRIMARY_RGB);
    const displayUrl = truncate(
      sourceUrl,
      Math.floor((CONTENT_WIDTH_MM - sourceLabelWidth) / 1.4),
    );
    doc.textWithLink(displayUrl, MARGIN_X_MM + sourceLabelWidth, footerLine1Y, {
      url: sourceUrl,
    });

    doc.setTextColor(...MUTED_RGB);
    doc.text(`Generated on: ${exportDate}`, MARGIN_X_MM, footerLine2Y);
    doc.text(`Page ${i} of ${total}`, A4_WIDTH_MM - MARGIN_X_MM, footerLine2Y, {
      align: 'right',
    });
  }
}

// --- Logo loading ---------------------------------------------------------

/**
 * Fetch the bundled site logo (SVG) and rasterize it to a PNG data URL via
 * an off-screen canvas, so it can be embedded by jsPDF (which has no native
 * SVG support). Returns null when the logo can't be loaded or rendered —
 * the cover/header then falls back to text-only branding.
 *
 * We rasterize at a deliberately high pixel resolution (4× the target
 * print size) so the printed result stays sharp on 300 dpi devices.
 */
async function loadWhiteLogoAsPng(
  siteBase: string,
): Promise<{url: string; width: number; height: number} | null> {
  // Resolve the logo relative to the page the user is currently on. The
  // configured `siteBase` may point at the production origin (from
  // siteConfig.url) which would fail in dev / staging due to CORS. The
  // current page's origin + baseUrl is the only origin we can fetch from
  // without CORS and is guaranteed to host the static asset.
  let logoUrl: string;
  try {
    const path = new URL(siteBase).pathname.replace(/\/+$/, '/') || '/';
    logoUrl = new URL(
      `${path}img/syskit-horizontal-white-logotype.png`.replace(/\/+/g, '/'),
      window.location.origin,
    ).toString();
  } catch {
    logoUrl = '/img/syskit-horizontal-white-logotype.png';
  }
  try {
    const response = await fetch(logoUrl, {credentials: 'same-origin'});
    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.warn('[PdfExportButton] logo fetch failed', logoUrl, response.status);
      return null;
    }
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    try {
      const img = new Image();
      img.src = blobUrl;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('logo decode failed'));
      });
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(img, 0, 0);

      // Trim transparent padding so the logo aligns flush with the cover's
      // left text margin. The source PNG has substantial empty space on all
      // sides which would otherwise visually indent the artwork.
      let trimmed: HTMLCanvasElement = canvas;
      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const {data, width: w, height: h} = imgData;
        let minX = w;
        let minY = h;
        let maxX = -1;
        let maxY = -1;
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            if (data[(y * w + x) * 4 + 3] > 10) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        if (maxX >= minX && maxY >= minY) {
          const tw = maxX - minX + 1;
          const th = maxY - minY + 1;
          const trimCanvas = document.createElement('canvas');
          trimCanvas.width = tw;
          trimCanvas.height = th;
          const tctx = trimCanvas.getContext('2d');
          if (tctx) {
            tctx.drawImage(canvas, minX, minY, tw, th, 0, 0, tw, th);
            trimmed = trimCanvas;
          }
        }
      } catch {
        // getImageData can throw if the canvas is tainted; fall back to the
        // untrimmed canvas in that case.
      }

      return {
        url: trimmed.toDataURL('image/png'),
        width: trimmed.width,
        height: trimmed.height,
      };
    } finally {
      URL.revokeObjectURL(blobUrl);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[PdfExportButton] logo load failed', err);
    return null;
  }
}

// --- Cover page -----------------------------------------------------------

const WHITE_RGB: [number, number, number] = [255, 255, 255];

const SNAPSHOT_DISCLAIMER =
  'This is a point-in-time snapshot of the Syskit Point documentation. ' +
  'For the most up-to-date information, always refer to the source article.';

interface CoverTocRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Render the cover page on the current (first) page of `doc`. Returns one
 * link rectangle per H2 entry rendered in the "In this article" list (in
 * the same order as `h2Texts`); the caller wires each rectangle to its
 * target page number with `doc.link()` once content has been rendered.
 */
function renderCoverPage(
  doc: JsPDFType,
  opts: GeneratePdfOptions,
  whiteLogo: {url: string; width: number; height: number} | null,
  h2Texts: string[],
): CoverTocRect[] {
  const padX = 20;
  const contentW = A4_WIDTH_MM - padX * 2;

  // Full-page deep purple background (cover-only color).
  const COVER_BG_RGB: [number, number, number] = [35, 0, 86];
  doc.setFillColor(...COVER_BG_RGB);
  doc.rect(0, 0, A4_WIDTH_MM, A4_HEIGHT_MM, 'F');

  // --- Title (white, bold, left-aligned) ---
  // Positioned around the vertical center of the page so the cover reads
  // as a balanced hero block rather than a top-heavy title.
  let y = A4_HEIGHT_MM / 2 - 30;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(60);
  doc.setTextColor(...WHITE_RGB);
  const titleLineHeight = 24;
  const titleLines = doc.splitTextToSize(opts.title, contentW) as string[];
  for (const ln of titleLines) {
    doc.text(ln, padX, y);
    y += titleLineHeight;
  }
  y += 4;

  // --- Subtitle ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(20);
  doc.setTextColor(...WHITE_RGB);
  doc.text('Syskit Point Documentation', padX, y);
  y += 12;

  // --- Separator line (white) ---
  doc.setDrawColor(...WHITE_RGB);
  doc.setLineWidth(0.5);
  doc.line(padX, y, A4_WIDTH_MM - padX, y);
  y += 14;

  // --- "In this article" heading + H2 anchor list ---
  const rects: CoverTocRect[] = [];
  if (h2Texts.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...WHITE_RGB);
    doc.text('In this article', padX, y);
    y += 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    const itemH = 6.5;
    // Reserve space at the bottom for the logo + footer block (~70 mm).
    const maxY = A4_HEIGHT_MM - 70;
    for (const text of h2Texts) {
      if (y + itemH > maxY) break;
      const lines = doc.splitTextToSize(text, contentW) as string[];
      const first = lines[0];
      doc.text(first, padX, y);
      const w = doc.getTextWidth(first);
      rects.push({
        x: padX,
        y: y - 3.5,
        w: Math.min(w, contentW),
        h: itemH,
      });
      y += itemH;
      for (let i = 1; i < lines.length; i++) {
        if (y + itemH > maxY) break;
        doc.text(lines[i], padX + 4, y);
        y += itemH;
      }
    }
  }

  // --- White Syskit logo (above the footer block) ---
  const footerBlockTop = A4_HEIGHT_MM - 42;
  if (whiteLogo) {
    const targetW = 27.5;
    const targetH = (whiteLogo.height * targetW) / whiteLogo.width;
    const logoY = footerBlockTop - targetH - 8;
    doc.addImage(whiteLogo.url, 'PNG', padX, logoY, targetW, targetH);
  }

  // --- Footer: export line + disclaimer (white, left aligned) ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...WHITE_RGB);
  let fy = footerBlockTop;

  const exportedLabel = `Exported on ${opts.exportDate} from `;
  const exportedLabelW = doc.getTextWidth(exportedLabel);
  doc.text(exportedLabel, padX, fy);
  const urlMaxW = Math.max(20, contentW - exportedLabelW);
  const urlLines = doc.splitTextToSize(opts.sourceUrl, urlMaxW) as string[];
  if (urlLines.length > 0) {
    doc.textWithLink(urlLines[0], padX + exportedLabelW, fy, {
      url: opts.sourceUrl,
    });
    for (let i = 1; i < urlLines.length; i++) {
      fy += 5;
      doc.textWithLink(urlLines[i], padX, fy, {url: opts.sourceUrl});
    }
  }
  fy += 8;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(...WHITE_RGB);
  const dLines = doc.splitTextToSize(SNAPSHOT_DISCLAIMER, contentW) as string[];
  for (const ln of dLines) {
    doc.text(ln, padX, fy);
    fy += 4.8;
  }

  return rects;
}

// --- Back page ------------------------------------------------------------

interface BackPageLink {
  label: string;
  description: string;
  url: string;
}

const BACK_PAGE_LINKS: BackPageLink[] = [
  {
    label: 'Contact Syskit support',
    description: 'Get help from our technical support team.',
    url: 'https://www.syskit.com/contact-support/',
  },
  {
    label: 'Talk to sales',
    description: 'Pricing, licensing, and trial questions.',
    url: 'https://www.syskit.com/company/contact-us/',
  },
  {
    label: 'Syskit Point product page',
    description: 'Features, integrations, and customer stories.',
    url: 'https://www.syskit.com/products/point/',
  },
  {
    label: 'Syskit website',
    description: 'Explore the full Syskit product portfolio.',
    url: 'https://www.syskit.com/',
  },
];

function renderBackPage(doc: JsPDFType): void {
  let y = MARGIN_TOP_MM + 10;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...PRIMARY_RGB);
  doc.text('Need help?', MARGIN_X_MM, y);
  y += 10;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...TEXT_RGB);
  const lead = doc.splitTextToSize(
    'The Syskit team is happy to help with anything related to Syskit Point — from setup and configuration to questions about licensing.',
    CONTENT_WIDTH_MM,
  ) as string[];
  for (const ln of lead) {
    doc.text(ln, MARGIN_X_MM, y);
    y += 6;
  }
  y += 6;

  for (const link of BACK_PAGE_LINKS) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...PRIMARY_RGB);
    doc.textWithLink(link.label, MARGIN_X_MM, y, {url: link.url});
    // Underline.
    const lw = doc.getTextWidth(link.label);
    doc.setDrawColor(...PRIMARY_RGB);
    doc.setLineWidth(0.2);
    doc.line(MARGIN_X_MM, y + 0.8, MARGIN_X_MM + lw, y + 0.8);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...TEXT_RGB);
    const descLines = doc.splitTextToSize(
      link.description,
      CONTENT_WIDTH_MM,
    ) as string[];
    for (const ln of descLines) {
      doc.text(ln, MARGIN_X_MM, y);
      y += 5;
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...MUTED_RGB);
    doc.text(link.url, MARGIN_X_MM, y);
    y += 9;
  }

  // Copyright at bottom.
  const year = new Date().getFullYear();
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...MUTED_RGB);
  doc.text(
    `\u00a9 ${year} Syskit. All rights reserved.`,
    A4_WIDTH_MM / 2,
    A4_HEIGHT_MM - 18,
    {align: 'center'},
  );
}

// --- Outline / bookmarks --------------------------------------------------

function buildOutline(
  doc: JsPDFType,
  articleTitle: string,
  headings: {level: number; text: string; page: number}[],
): void {
  type AnyOutline = {add: (parent: unknown, title: string, options: {pageNumber: number}) => unknown};
  const outline = (doc as unknown as {outline?: AnyOutline}).outline;
  if (!outline || typeof outline.add !== 'function') return;
  try {
    // Root entry pointing at the cover.
    const rootNode = outline.add(null, articleTitle, {pageNumber: 1});
    let lastH2Node: unknown = rootNode;
    for (const h of headings) {
      if (h.level === 1) {
        // Skip: there's typically only one H1 and it's the article title,
        // already covered by the root entry.
        continue;
      }
      if (h.level === 2) {
        lastH2Node = outline.add(rootNode, h.text, {pageNumber: h.page});
      } else if (h.level === 3) {
        outline.add(lastH2Node ?? rootNode, h.text, {pageNumber: h.page});
      }
    }
  } catch {
    // Outline plugin is optional; ignore failures so the export still works.
  }
}

// --- Public entrypoint ----------------------------------------------------

export async function generatePdf(opts: GeneratePdfOptions): Promise<void> {
  const {jsPDF} = await import('jspdf');

  // Pre-load any lazy/undecoded images in the LIVE article so that when the
  // renderer paints them onto a canvas they are guaranteed to be decoded.
  // Docusaurus uses loading="lazy" by default, so images below the fold
  // wouldn't otherwise be available.
  if (opts.includeImages) {
    await preloadArticleImages(opts.articleEl);
  }
  const whiteLogo = await loadWhiteLogoAsPng(opts.siteBase);

  const clone = opts.articleEl.cloneNode(true) as HTMLElement;
  stripNonContent(clone, opts.includeImages);
  const blocks = extractBlocks(clone, opts.siteBase, opts.sourceUrl);

  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
    compress: true,
  });

  // PDF metadata visible in "File > Properties" and OS file previews.
  doc.setProperties({
    title: opts.title,
    subject: opts.breadcrumbs.map((b) => b.label).filter(Boolean).join(' / '),
    author: 'Syskit',
    creator: 'Syskit Point Documentation',
    keywords: 'Syskit Point, Microsoft 365, documentation',
  });

  // Collect H2 texts up-front so the cover page can list them as anchors.
  const h2Texts: string[] = [];
  for (const b of blocks) {
    if (b.type === 'heading' && b.level === 2) {
      const txt = runsToPlainText(b.runs);
      if (txt) h2Texts.push(txt);
    }
  }

  // --- Page 1: cover ---
  const coverRects = renderCoverPage(doc, opts, whiteLogo, h2Texts);

  // --- Pages 2..N: article content ---
  doc.addPage();
  const renderer = new Renderer(doc, opts.includeImages, opts.siteBase);
  renderer.y = MARGIN_TOP_MM;

  // The article's own <h1> renders inline. Only add a fallback title if the
  // article didn't include one (rare, but possible for landing pages).
  const first = blocks[0];
  if (!first || first.type !== 'heading' || first.level !== 1) {
    renderer.renderHeading(1, [{text: opts.title, bold: true}]);
  }
  renderer.renderBlocks(blocks);

  // --- Final page: back / support ---
  doc.addPage();
  renderBackPage(doc);

  // --- Wire cover "In this article" entries to their target H2 pages ---
  const h2Pages = renderer.headings.filter((h) => h.level === 2);
  for (let i = 0; i < coverRects.length && i < h2Pages.length; i++) {
    const rect = coverRects[i];
    doc.setPage(1);
    doc.link(rect.x, rect.y, rect.w, rect.h, {
      pageNumber: h2Pages[i].page,
    });
  }

  // --- Outline / bookmarks panel ---
  buildOutline(doc, opts.title, renderer.headings);

  // --- Header & footer on every page EXCEPT cover (1) and back page (last)
  const breadcrumbText = opts.breadcrumbs
    .map((b) => b.label)
    .filter(Boolean)
    .join(' / ');
  drawHeaderFooter(doc, breadcrumbText, opts.sourceUrl, opts.exportDate, {
    skipFirst: true,
    skipLast: true,
  });

  doc.save(`${sanitizeFilename(opts.title)}.pdf`);
}
