/**
 * Cover page (page 1) renderer.
 *
 * Full-bleed deep-purple background with the article title, "In this
 * article" anchor list, white Syskit logo, and an export/disclaimer
 * footer. Returns the rectangle for each H2 anchor so the caller can wire
 * up `doc.link()` once the target page numbers are known.
 */

import type {jsPDF as JsPDFType} from 'jspdf';

import {
  A4_HEIGHT_MM,
  A4_WIDTH_MM,
  COVER_BG_RGB,
  SNAPSHOT_DISCLAIMER,
  WHITE_RGB,
} from './constants';
import type {CoverTocRect, GeneratePdfOptions} from './types';

/**
 * Render the cover page on the current (first) page of `doc`. Returns one
 * link rectangle per H2 entry rendered in the "In this article" list (in
 * the same order as `h2Texts`); the caller wires each rectangle to its
 * target page number with `doc.link()` once content has been rendered.
 */
export function renderCoverPage(
  doc: JsPDFType,
  opts: GeneratePdfOptions,
  whiteLogo: {url: string; width: number; height: number} | null,
  h2Texts: string[],
): CoverTocRect[] {
  const padX = 20;
  const contentW = A4_WIDTH_MM - padX * 2;

  // Full-page deep purple background (cover-only color).
  doc.setFillColor(...COVER_BG_RGB);
  doc.rect(0, 0, A4_WIDTH_MM, A4_HEIGHT_MM, 'F');

  // --- Title (white, bold, left-aligned) ---
  // Positioned around the upper-middle of the page (~20% higher than the
  // geometric center) so the cover reads as a balanced hero block with
  // breathing room above the "In this article" list below it.
  let y = (A4_HEIGHT_MM / 2 - 30) * 0.8;
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
