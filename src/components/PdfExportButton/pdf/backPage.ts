/**
 * Back page (last page) renderer.
 *
 * Renders a "Need help?" support panel with links to Syskit's contact /
 * product pages, plus a small copyright line at the bottom.
 */

import type {jsPDF as JsPDFType} from 'jspdf';

import {
  A4_HEIGHT_MM,
  A4_WIDTH_MM,
  BACK_PAGE_LINKS,
  CONTENT_WIDTH_MM,
  MARGIN_TOP_MM,
  MARGIN_X_MM,
  MUTED_RGB,
  PRIMARY_RGB,
  TEXT_RGB,
} from './constants';

export function renderBackPage(doc: JsPDFType): void {
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
