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

  // --- Pre-measure content to position the title dynamically ---
  const titleLineHeight = 24;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(60);
  const titleLines = doc.splitTextToSize(opts.title, contentW) as string[];
  const titleH = titleLines.length * titleLineHeight + 4;
  const subtitleH = 12;
  const separatorH = 14;

  const itemH = 6.5;
  const maxDisplayed = 5;
  const displayCount = Math.min(h2Texts.length, maxDisplayed);
  const remaining = h2Texts.length - displayCount;
  const tocSectionH =
    h2Texts.length > 0
      ? 10 + displayCount * itemH + (remaining > 0 ? itemH : 0)
      : 0;

  const totalH = titleH + subtitleH + separatorH + tocSectionH;

  // Reserve space at the bottom for the logo + footer block (~70 mm).
  const maxY = A4_HEIGHT_MM - 70;
  const defaultY = (A4_HEIGHT_MM / 2 - 30) * 0.8;
  let y = Math.max(30, Math.min(defaultY, maxY - totalH));

  // --- Title (white, bold, left-aligned) ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(60);
  doc.setTextColor(...WHITE_RGB);
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
    for (let idx = 0; idx < displayCount; idx++) {
      const text = h2Texts[idx];
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
        doc.text(lines[i], padX + 4, y);
        y += itemH;
      }
    }
    if (remaining > 0) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(11);
      doc.text(`and ${remaining} more`, padX, y);
      y += itemH;
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
