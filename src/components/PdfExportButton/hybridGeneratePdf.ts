/**
 * Hybrid PDF generator: selectable text (jsPDF.html) + overlayed images (html2canvas)
 */
import type {jsPDF as JsPDFType} from 'jspdf';
import type {GeneratePdfOptions} from './generatePdf';
import {processLinks, drawHeaderFooter, appendRelatedLinks, sanitizeFilename, MARGIN_TOP_MM, MARGIN_BOTTOM_MM, MARGIN_X_MM, CONTENT_WIDTH_MM, A4_WIDTH_MM, A4_HEIGHT_MM, PRIMARY_RGB} from './generatePdf';

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const MARGIN_TOP_MM = 22;
const MARGIN_BOTTOM_MM = 22;
const MARGIN_X_MM = 15;
const CONTENT_WIDTH_MM = A4_WIDTH_MM - MARGIN_X_MM * 2;
const RENDER_WIDTH_PX = 780;
const PRIMARY_RGB: [number, number, number] = [87, 0, 175];

function pxToMm(px: number): number {
  // 1 px = 25.4 mm / 96 px
  return (px * 25.4) / 96;
}

export async function hybridGeneratePdf(opts: GeneratePdfOptions): Promise<void> {
  const [{jsPDF}, html2canvasMod] = await Promise.all([
    import('jspdf'),
    import('html2canvas'),
  ]);
  const html2canvas = html2canvasMod.default;

  // Clone and prepare the article
  const {articleEl, includeImages} = opts;
  const clone = articleEl.cloneNode(true) as HTMLElement;
  // Remove nav/TOC/footer/buttons as in stripNonContent
  [
    '.theme-doc-breadcrumbs',
    '.theme-doc-toc-mobile',
    '.theme-doc-toc-desktop',
    '.theme-doc-footer',
    '.pagination-nav',
    '[class*="docItemTOCMobile"]',
    '[data-pdf-exclude]',
    '.no-print',
    '[data-pdf-export-button]',
  ].forEach(sel => clone.querySelectorAll(sel).forEach(el => el.remove()));

  // Gather images to overlay (and their selectors for later lookup)
  let images: {el: HTMLImageElement, selector: string}[] = [];
  if (includeImages) {
    images = Array.from(clone.querySelectorAll('img')).map((el, i) => ({
      el,
      selector: `img[data-pdf-img-idx="${i}"]`,
    }));
    images.forEach(({el}, i) => el.setAttribute('data-pdf-img-idx', String(i)));
  } else {
    clone.querySelectorAll('img, picture, svg').forEach(el => el.remove());
  }

  // Prepare container for jsPDF.html
  const container = document.createElement('div');
  container.style.width = `${RENDER_WIDTH_PX}px`;
  container.style.background = '#fff';
  container.appendChild(clone);
  document.body.appendChild(container);

  // Process links for footnotes
  const footnotes = processLinks(clone, opts.siteBase, opts.sourceUrl);

  // Render main content as selectable text
  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
    compress: true,
  });
  await doc.html(container, {
    x: MARGIN_X_MM,
    y: MARGIN_TOP_MM,
    width: CONTENT_WIDTH_MM,
    windowWidth: RENDER_WIDTH_PX,
    margin: [MARGIN_TOP_MM, MARGIN_X_MM, MARGIN_BOTTOM_MM, MARGIN_X_MM],
    autoPaging: 'text',
    html2canvas: {scale: 1.5, useCORS: true, backgroundColor: '#fff'},
  });

  // Overlay images at their positions (after jsPDF.html)
  for (const {selector} of images) {
    const img = container.querySelector(selector) as HTMLImageElement;
    if (!img) continue;
    const rect = img.getBoundingClientRect();
    const imgCanvas = await html2canvas(img, {scale: 2, useCORS: true, backgroundColor: null});
    const imgData = imgCanvas.toDataURL('image/png');
    // Compute position in mm relative to the PDF content area
    const xMm = pxToMm(rect.left) * (CONTENT_WIDTH_MM / RENDER_WIDTH_PX) + MARGIN_X_MM;
    const yMm = pxToMm(rect.top) * (CONTENT_WIDTH_MM / RENDER_WIDTH_PX) + MARGIN_TOP_MM;
    const wMm = pxToMm(rect.width) * (CONTENT_WIDTH_MM / RENDER_WIDTH_PX);
    const hMm = pxToMm(rect.height) * (CONTENT_WIDTH_MM / RENDER_WIDTH_PX);
    doc.addImage(imgData, 'PNG', xMm, yMm, wMm, hMm);
  }

  // Related links and header/footer
  appendRelatedLinks(doc, footnotes);
  const breadcrumbText = opts.breadcrumbs
    .map((b) => b.label)
    .filter(Boolean)
    .join(' / ');
  drawHeaderFooter(doc, breadcrumbText, opts.sourceUrl, opts.exportDate);

  doc.save(`${sanitizeFilename(opts.title)}.pdf`);
  container.remove();
}
