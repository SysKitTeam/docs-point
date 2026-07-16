/**
 * Page chrome: shared header / footer band drawn on every interior page,
 * plus the bookmark/outline panel construction.
 */

import type {jsPDF as JsPDFType} from 'jspdf';

import {
  A4_HEIGHT_MM,
  A4_WIDTH_MM,
  CONTENT_WIDTH_MM,
  MARGIN_X_MM,
  MUTED_RGB,
  PRIMARY_RGB,
} from './constants';
import {truncate} from './utils';

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

/**
 * Build the PDF outline (bookmarks panel) from the headings captured by
 * the renderer. The plugin is optional, so this silently no-ops when
 * jsPDF's outline plugin isn't loaded.
 */
export function buildOutline(
  doc: JsPDFType,
  articleTitle: string,
  headings: {level: number; text: string; page: number}[],
): void {
  type AnyOutline = {
    add: (parent: unknown, title: string, options: {pageNumber: number}) => unknown;
  };
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
  } catch (err) {
    // Outline plugin is optional; ignore failures so the export still works.
    // eslint-disable-next-line no-console
    console.warn('[PdfExport] outline construction failed', err);
  }
}
