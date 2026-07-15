/**
 * Page-by-page block renderer.
 *
 * `Renderer` walks a `Block[]` tree and paints each block onto a jsPDF
 * document using its native text/draw primitives. It also captures every
 * heading it draws so the outline panel and cover "In this article" anchors
 * can target the correct page numbers afterwards.
 */

import type {jsPDF as JsPDFType} from 'jspdf';

import {
  CODE_BG_RGB,
  CODE_BORDER_RGB,
  CONTENT_BOTTOM_MM,
  CONTENT_WIDTH_MM,
  FONT_BODY,
  FONT_CODE,
  FONT_H1,
  FONT_H2,
  FONT_H3,
  FONT_H4,
  FONT_SMALL,
  HEADING_GAP_AFTER_MM,
  HEADING_GAP_BEFORE_MM,
  LINE_HEIGHT_FACTOR,
  LIST_INDENT_MM,
  MARGIN_TOP_MM,
  MARGIN_X_MM,
  MUTED_RGB,
  PARAGRAPH_GAP_MM,
  PRIMARY_RGB,
  TEXT_RGB,
} from './constants';
import {imageToDataUrl} from './images';
import type {Block, ImageData, InlineRun, TableCell} from './types';
import {admonitionColor, httpMethodColor, runsToPlainText, sameStyle, tintColor} from './utils';

export class Renderer {
  doc: JsPDFType;
  y: number = MARGIN_TOP_MM;
  private includeImages: boolean;
  // siteBase is kept for parity with the original API even though the
  // renderer doesn't currently need to resolve relative URLs.
  private siteBase: string;
  // Headings captured during content rendering, used afterwards to build
  // the table of contents and the PDF outline / bookmarks panel.
  // `page` is the absolute page index at the time of rendering.
  readonly headings: {level: number; text: string; page: number; y: number; id?: string}[] = [];
  // Deferred internal anchor links — wired to target headings after rendering.
  readonly anchorLinks: {href: string; x: number; y: number; w: number; h: number; page: number}[] = [];

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
        this.renderHeading(b.level, b.runs, b.id);
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
      case 'video':
        this.renderVideo(b.url, b.title, indent, maxWidth);
        break;
      case 'hr':
        this.renderHr();
        break;
    }
  }

  // --- Description (frontmatter) ---
  renderDescription(text: string): void {
    const lineHeight = (FONT_BODY * LINE_HEIGHT_FACTOR) / 2.83465;
    this.doc.setFont('helvetica', 'italic');
    this.doc.setFontSize(FONT_BODY);
    this.doc.setTextColor(...MUTED_RGB);
    const lines = this.doc.splitTextToSize(text, CONTENT_WIDTH_MM) as string[];
    for (const ln of lines) {
      this.ensureSpace(lineHeight);
      this.doc.text(ln, MARGIN_X_MM, this.y + lineHeight - 1);
      this.y += lineHeight;
    }
    this.y += PARAGRAPH_GAP_MM;
  }

  // --- Headings ---
  // Render as a single native text call (no per-token positioning) so the
  // font's natural kerning is preserved — token-by-token placement caused
  // visibly wider letter spacing at larger sizes (H2 in particular).
  renderHeading(level: 1 | 2 | 3 | 4, runs: InlineRun[], id?: string): void {
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
          id,
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
  renderList(
    b: Extract<Block, {type: 'list'}>,
    indent: number,
    maxWidth: number,
  ): void {
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
      runs: InlineRun[];
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
        return {images, lines, runs: cell.runs, imagesBlockH};
      });
      while (prepared.length < colCount) {
        prepared.push({images: [], lines: [' '], runs: [], imagesBlockH: 0});
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
          // Use layoutInlineRuns for styled content (HTTP method badges, etc.)
          // by temporarily pointing this.y at the cell's text area.
          const hasStyledRuns = p.runs.some((r) => r.httpMethod || r.code || r.href);
          if (hasStyledRuns && p.runs.length > 0) {
            const savedY = this.y;
            this.y = cellY;
            this.layoutInlineRuns(p.runs, cellX, colWidth - cellPadding * 2, {
              fontSize: FONT_SMALL,
              bold: isHeaderRow,
              color: TEXT_RGB,
            });
            this.y = savedY;
          } else {
            // Plain text fast path.
            this.doc.setFont('helvetica', isHeaderRow ? 'bold' : 'normal');
            this.doc.setFontSize(FONT_SMALL);
            this.doc.setTextColor(...TEXT_RGB);
            let yLine = cellY + lineHeight - 1;
            for (const ln of p.lines) {
              this.doc.text(ln, cellX, yLine);
              yLine += lineHeight;
            }
          }
        }
      }
      this.y += rowHeight;
    }
    this.y += PARAGRAPH_GAP_MM;
  }

  // --- Admonition icon helpers ---

  private drawAdmonitionIcon(
    kind: string,
    cx: number,
    cy: number,
    color: [number, number, number],
  ): void {
    const r = 1.8; // icon radius in mm
    const k = kind.toLowerCase();

    if (k === 'warning' || k === 'caution') {
      // Filled triangle pointing up with "!" inside.
      const h = r * 2 * 0.866; // equilateral height
      const topY = cy - h * 0.6;
      const botY = cy + h * 0.4;
      this.doc.setFillColor(...color);
      this.doc.triangle(
        cx, topY,                // top vertex
        cx - r, botY,            // bottom-left
        cx + r, botY,            // bottom-right
        'F',
      );
      // "!" glyph inside
      this.doc.setFont('helvetica', 'bold');
      this.doc.setFontSize(7);
      this.doc.setTextColor(255, 255, 255);
      const tw = this.doc.getTextWidth('!');
      this.doc.text('!', cx - tw / 2, botY - 0.5);
    } else {
      // Filled circle for info, note, tip, danger, etc.
      this.doc.setFillColor(...color);
      this.doc.circle(cx, cy, r, 'F');

      this.doc.setFont('helvetica', 'bold');
      this.doc.setTextColor(255, 255, 255);

      if (k === 'danger') {
        this.doc.setFontSize(7);
        const tw = this.doc.getTextWidth('!');
        this.doc.text('!', cx - tw / 2, cy + 0.9);
      } else if (k === 'tip' || k === 'success') {
        // Draw a checkmark using lines.
        this.doc.setDrawColor(255, 255, 255);
        this.doc.setLineWidth(0.45);
        this.doc.line(cx - 0.9, cy, cx - 0.2, cy + 0.8);
        this.doc.line(cx - 0.2, cy + 0.8, cx + 0.9, cy - 0.6);
      } else {
        // info / note: "i" glyph
        this.doc.setFontSize(7.5);
        const tw = this.doc.getTextWidth('i');
        this.doc.text('i', cx - tw / 2, cy + 1);
      }
    }
  }

  // --- Admonitions ---
  // Tinted background panel with a slim colored left accent bar and a
  // hanging icon to the left of the body text.
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
    const iconDiam = 3.6;
    const iconTextGap = 2; // gap between icon and text column

    this.ensureSpace(padTop + padBottom + 4);

    const startY = this.y;
    const startPage = this.doc.getCurrentPageInfo().pageNumber;

    this.y = startY + padTop;

    // Icon sits in the gutter between the bar and the text column.
    const iconCx = x + barWidth + padX + iconDiam / 2;
    const firstLineH = (FONT_BODY * LINE_HEIGHT_FACTOR) / 2.83465;
    const iconCy = this.y + firstLineH / 2;
    this.drawAdmonitionIcon(kind, iconCx, iconCy, color);

    // Body text starts after: bar + padX + icon + gap.
    const textIndentExtra = barWidth + padX + iconDiam + iconTextGap;
    const contentIndent = indent + textIndentExtra;
    const contentWidth = maxWidth - textIndentExtra - padX;
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

  // --- Video ---
  // Renders a play-button icon with a clickable link to the video.
  renderVideo(url: string, title: string, indent: number, maxWidth: number): void {
    const x = MARGIN_X_MM + indent;
    const lineHeight = (FONT_BODY * LINE_HEIGHT_FACTOR) / 2.83465;
    const iconR = 2; // play-button circle radius
    const iconDiam = iconR * 2;
    const gap = 2;

    this.ensureSpace(iconDiam + PARAGRAPH_GAP_MM);

    // Draw a filled play-button circle.
    const iconCx = x + iconR;
    const iconCy = this.y + lineHeight / 2;
    this.doc.setFillColor(...PRIMARY_RGB);
    this.doc.circle(iconCx, iconCy, iconR, 'F');
    // Triangle (play arrow) inside.
    const ax = iconCx - 0.6;
    const ay1 = iconCy - 1;
    const ay2 = iconCy + 1;
    const bx = iconCx + 1;
    this.doc.setFillColor(255, 255, 255);
    this.doc.triangle(ax, ay1, ax, ay2, bx, iconCy, 'F');

    // Clickable title text next to the icon.
    const textX = x + iconDiam + gap;
    this.doc.setFont('helvetica', 'normal');
    this.doc.setFontSize(FONT_BODY);
    this.doc.setTextColor(...PRIMARY_RGB);
    const baselineY = this.y + lineHeight - 1;
    this.doc.textWithLink(title, textX, baselineY, {url});
    const tw = this.doc.getTextWidth(title);
    // Underline.
    this.doc.setDrawColor(...PRIMARY_RGB);
    this.doc.setLineWidth(0.1);
    this.doc.line(textX, baselineY + 0.6, textX + tw, baselineY + 0.6);

    this.y += Math.max(iconDiam, lineHeight) + PARAGRAPH_GAP_MM;
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
      isSpace: boolean;
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
        // If this group ends with a trailing space AND is followed (on the
        // same line) by a different-style group, split that trailing space
        // off and paint it as its own text-show call. Trailing spaces inside
        // a text-show operator are dropped by some PDF viewers when followed
        // by an immediate font change, which would visually collapse e.g.
        // "into " + bold "workspaces" into "intoworkspaces". By painting the
        // space alone (non-trailing inside its own op), it is preserved at
        // the exact width reserved during layout.
        let trailingSpaceX: number | null = null;
        if (
          j < curLine.length &&
          !curLine[j].isSpace &&
          groupText.length > 0 &&
          groupText.charCodeAt(groupText.length - 1) === 0x20
        ) {
          // The last token in the merged group is the trailing space token.
          trailingSpaceX = curLine[j - 1].x;
          groupText = groupText.slice(0, -1);
        }
        setFontFor(groupRun);
        const groupW = this.doc.getTextWidth(groupText);
        // Inline code background — light gray pill behind the code span.
        if (groupRun.code) {
          const padX = 0.6;
          const padY = 0.4;
          const bgY = baselineY - lineHeight + 1 + padY;
          const bgH = lineHeight + padY;
          this.doc.setFillColor(...CODE_BG_RGB);
          this.doc.roundedRect(
            groupX - padX,
            bgY,
            groupW + padX * 2,
            bgH,
            0.6, 0.6, 'F',
          );
        }
        // HTTP method badge — colored pill, same geometry as inline code.
        if (groupRun.httpMethod) {
          const badgeColor = httpMethodColor(groupRun.httpMethod);
          const padX = 1;
          const padY = 0.4;
          const bgY = baselineY - lineHeight + 1 + padY;
          const bgH = lineHeight + padY;
          this.doc.setFillColor(
            Math.round(badgeColor[0] + (255 - badgeColor[0]) * 0.85),
            Math.round(badgeColor[1] + (255 - badgeColor[1]) * 0.85),
            Math.round(badgeColor[2] + (255 - badgeColor[2]) * 0.85),
          );
          this.doc.roundedRect(
            groupX - padX,
            bgY,
            groupW + padX * 2,
            bgH,
            0.6, 0.6, 'F',
          );
        }
        // All-caps method text has no descenders — nudge text down so it
        // sits visually centered in the badge pill.
        const textBaselineY = groupRun.httpMethod
          ? baselineY + 0.5
          : baselineY;
        const linkColor = groupRun.href ? PRIMARY_RGB
          : groupRun.httpMethod ? httpMethodColor(groupRun.httpMethod)
          : style.color;
        this.doc.setTextColor(...linkColor);
        if (groupRun.href && groupRun.href.startsWith('#')) {
          // Internal anchor link — render styled text now, wire to target
          // heading page after all content has been rendered.
          this.doc.text(groupText, groupX, textBaselineY);
          const w = this.doc.getTextWidth(groupText);
          this.doc.setDrawColor(...linkColor);
          this.doc.setLineWidth(0.1);
          this.doc.line(groupX, baselineY + 0.6, groupX + w, baselineY + 0.6);
          this.anchorLinks.push({
            href: groupRun.href,
            x: groupX,
            y: baselineY - 3.5,
            w,
            h: 5,
            page: this.doc.getCurrentPageInfo().pageNumber,
          });
        } else if (groupRun.href) {
          this.doc.textWithLink(groupText, groupX, textBaselineY, {
            url: groupRun.href,
          });
          // Underline the link segment.
          const w = this.doc.getTextWidth(groupText);
          this.doc.setDrawColor(...linkColor);
          this.doc.setLineWidth(0.1);
          this.doc.line(groupX, textBaselineY + 0.6, groupX + w, textBaselineY + 0.6);
        } else {
          this.doc.text(groupText, groupX, textBaselineY);
        }
        if (trailingSpaceX !== null) {
          this.doc.text(' ', trailingSpaceX, baselineY);
        }
        i = j;
      }

      this.y += lineHeight;
      curLine = [];
      curX = 0;
    };

    for (let ti = 0; ti < tokens.length; ti++) {
      const tok = tokens[ti];
      if (tok.isNewline) {
        flushLine(false);
        continue;
      }
      let w = measure(tok.text, tok.run);
      // Widen a space token that bridges a style change. Regular Helvetica
      // space placed before bold text leaves a visually tight gap because
      // the bold glyphs (especially 'w') have small left-side bearings.
      // Reserving +35% layout width pushes the following word right enough
      // to look like a normal inter-word gap.
      if (tok.isSpace) {
        const next = tokens[ti + 1];
        if (next && !next.isNewline && !next.isSpace &&
            !sameStyle(tok.run, next.run)) {
          w *= 1.35;
        }
      }
      // HTTP method badge gap: the CSS margin-right doesn't survive DOM
      // extraction, so inject layout-only padding after the badge token.
      // This covers cases with or without a space node following the span.
      if (tok.run.httpMethod && !tok.isSpace) {
        const BADGE_PAD_X = 1; // must match the padX used when drawing the pill
        w += BADGE_PAD_X + 0.5; // padX overhang + small visual gap
      }
      if (curX + w > width && curLine.length > 0) {
        flushLine(false);
      }
      curLine.push({
        text: tok.text,
        x: x + curX,
        width: w,
        run: tok.run,
        isSpace: tok.isSpace,
      });
      curX += w;
    }
    if (curLine.length) flushLine(true);
  }
}
