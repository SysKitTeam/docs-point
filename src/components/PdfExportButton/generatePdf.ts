/**
 * Client-side PDF generator for Syskit Point doc articles.
 *
 * Strategy:
 *  - Clone the article DOM so the live page is untouched.
 *  - Strip nav/TOC/footer/pagination.
 *  - Optionally strip images.
 *  - Walk anchors in document order: skip in-page/mailto/tel, rewrite
 *    relative hrefs to absolute docs.syskit.com URLs, deduplicate by URL,
 *    assign footnote numbers, and inject a <sup>[n]</sup> after each link.
 *  - Render the clone via jsPDF.html() (uses html2canvas under the hood) at A4.
 *  - Draw a header (Syskit Point + breadcrumbs) and footer (source URL, date,
 *    page numbers) on every page.
 *  - Append a native-text "Related links" appendix with clickable URLs that
 *    matches the in-body footnote numbers.
 */

import type {jsPDF as JsPDFType} from 'jspdf';

export interface PdfBreadcrumb {
  label: string;
}

export interface GeneratePdfOptions {
  /** The live <article> element to export. */
  articleEl: HTMLElement;
  /** Article title (used for the PDF filename). */
  title: string;
  /** Absolute URL of the source page on docs.syskit.com. */
  sourceUrl: string;
  /** Site origin + baseUrl (e.g. "https://docs.syskit.com/point/"). */
  siteBase: string;
  /** Breadcrumb path shown in the header. */
  breadcrumbs: PdfBreadcrumb[];
  /** When false, all <img>/<picture> elements are removed before rendering. */
  includeImages: boolean;
  /** Pre-formatted export date string (e.g. "2026-05-26"). */
  exportDate: string;
}

interface Footnote {
  n: number;
  text: string;
  url: string;
}

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const MARGIN_TOP_MM = 22;
const MARGIN_BOTTOM_MM = 22;
const MARGIN_X_MM = 15;
const CONTENT_WIDTH_MM = A4_WIDTH_MM - MARGIN_X_MM * 2;
// Width (in CSS px) of the off-screen render container. With html2canvas
// capturing this width and the result scaled into CONTENT_WIDTH_MM, choosing
// ~750–800 px yields natural body-text proportions on A4.
const RENDER_WIDTH_PX = 780;
// Syskit Point primary color (matches --ifm-color-primary in custom.css).
const PRIMARY_RGB: [number, number, number] = [87, 0, 175];

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
  return text.replace(/\s+/g, ' ').trim();
}

function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

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
    // pageUrl is absolute, so it serves as the resolution base for
    // relative paths (../foo, ./bar, foo.md) and root-relative paths (/foo).
    return new URL(href, pageUrl).toString();
  } catch {
    try {
      return new URL(href, siteBase).toString();
    } catch {
      return href;
    }
  }
}

export function processLinks(
  clone: HTMLElement,
  siteBase: string,
  pageUrl: string,
): Footnote[] {
  const footnotes: Footnote[] = [];
  const byUrl = new Map<number, Footnote>();
  const urlToIndex = new Map<string, number>();

  const anchors = Array.from(clone.querySelectorAll('a'));
  for (const a of anchors) {
    const rawHref = a.getAttribute('href') ?? '';
    if (!isFootnoteCandidate(rawHref)) continue;

    const absolute = toAbsoluteUrl(rawHref, siteBase, pageUrl);
    a.setAttribute('href', absolute);

    let n = urlToIndex.get(absolute);
    if (n === undefined) {
      n = footnotes.length + 1;
      const fn: Footnote = {
        n,
        text: collapse(a.textContent ?? '') || absolute,
        url: absolute,
      };
      footnotes.push(fn);
      byUrl.set(n, fn);
      urlToIndex.set(absolute, n);
    }

    const sup = clone.ownerDocument!.createElement('sup');
    sup.className = 'pdf-fn';
    sup.textContent = `[${n}]`;
    sup.style.fontSize = '0.7em';
    sup.style.verticalAlign = 'super';
    sup.style.marginLeft = '1px';
    a.insertAdjacentElement('afterend', sup);
  }

  return footnotes;
}

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
    // The PDF export button itself, in case the article wraps it.
    '[data-pdf-export-button]',
  ];
  for (const sel of selectors) {
    clone.querySelectorAll(sel).forEach((el) => el.remove());
  }
  if (!includeImages) {
    clone.querySelectorAll('img, picture, svg').forEach((el) => el.remove());
  }
}

function buildRenderRoot(
  source: HTMLElement,
  includeImages: boolean,
  siteBase: string,
  pageUrl: string,
): {root: HTMLElement; footnotes: Footnote[]} {
  const clone = source.cloneNode(true) as HTMLElement;
  stripNonContent(clone, includeImages);
  const footnotes = processLinks(clone, siteBase, pageUrl);

  // Wrap in a container that gives jsPDF.html() a predictable layout width.
  // RENDER_WIDTH_PX is matched by the `windowWidth` jsPDF option so content
  // scales to fit CONTENT_WIDTH_MM without horizontal clipping.
  const container = source.ownerDocument!.createElement('div');
  container.style.width = `${RENDER_WIDTH_PX}px`;
  container.style.padding = '0';
  container.style.margin = '0';
  container.style.background = '#ffffff';
  container.style.color = '#1a1a1a';
  container.style.fontFamily =
    'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
  container.style.fontSize = '13px';
  container.style.lineHeight = '1.5';
  container.style.wordWrap = 'break-word';
  container.style.overflowWrap = 'break-word';

  // Reset Docusaurus typography inside the clone so headings/body text render
  // at print-friendly sizes instead of inheriting the live site's :root scale
  // (which uses values like --ifm-h1-font-size: 3rem).
  const resetStyles = source.ownerDocument!.createElement('style');
  resetStyles.textContent = `
    .pdf-export-root, .pdf-export-root * {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif !important;
      box-sizing: border-box;
    }
    .pdf-export-root { font-size: 15px; line-height: 1.55; color: #1a1a1a; }
    .pdf-export-root h1 { font-size: 26px !important; line-height: 1.25 !important; margin: 0 0 12px !important; font-weight: 700; }
    .pdf-export-root h2 { font-size: 20px !important; line-height: 1.3 !important; margin: 18px 0 8px !important; font-weight: 700; }
    .pdf-export-root h3 { font-size: 17px !important; line-height: 1.3 !important; margin: 14px 0 6px !important; font-weight: 700; }
    .pdf-export-root h4, .pdf-export-root h5, .pdf-export-root h6 {
      font-size: 15px !important; line-height: 1.3 !important; margin: 12px 0 4px !important; font-weight: 700;
    }
    .pdf-export-root p, .pdf-export-root li { font-size: 15px !important; line-height: 1.55 !important; margin: 0 0 7px !important; }
    .pdf-export-root ul, .pdf-export-root ol { margin: 0 0 8px 22px !important; padding: 0 !important; }
    .pdf-export-root code { font-size: 14px !important; font-family: "Consolas", "Courier New", monospace !important; background: #f4f4f4; padding: 1px 4px; border-radius: 3px; }
    .pdf-export-root pre { font-size: 14px !important; padding: 8px !important; background: #f4f4f4 !important; border-radius: 4px; overflow: hidden; white-space: pre-wrap !important; }
    .pdf-export-root pre code { background: transparent !important; padding: 0 !important; }
    .pdf-export-root a { color: #5700AF; text-decoration: underline; }
    .pdf-export-root img { max-width: 100% !important; height: auto !important; }
    .pdf-export-root table { font-size: 14px !important; border-collapse: collapse; width: 100%; margin: 0 0 8px; }
    .pdf-export-root th, .pdf-export-root td { border: 1px solid #ddd; padding: 4px 6px; text-align: left; }
    .pdf-export-root .pdf-fn { font-size: 0.7em !important; vertical-align: super !important; color: #5700AF !important; }
    .pdf-export-root blockquote { margin: 0 0 8px; padding: 4px 10px; border-left: 3px solid #ddd; color: #555; }
    .pdf-export-root hr { border: none; border-top: 1px solid #ddd; margin: 10px 0; }
  `;
  container.appendChild(resetStyles);
  container.classList.add('pdf-export-root');
  container.appendChild(clone);
  return {root: container, footnotes};
}

export function drawHeaderFooter(
  doc: JsPDFType,
  breadcrumbText: string,
  sourceUrl: string,
  exportDate: string,
): void {
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);

    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...PRIMARY_RGB);
    doc.text('Syskit Point', MARGIN_X_MM, 12);

    if (breadcrumbText) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(110);
      const truncated = truncate(breadcrumbText, 90);
      doc.text(truncated, A4_WIDTH_MM - MARGIN_X_MM, 12, {align: 'right'});
    }

    doc.setDrawColor(220);
    doc.setLineWidth(0.2);
    doc.line(MARGIN_X_MM, 15, A4_WIDTH_MM - MARGIN_X_MM, 15);

    // Footer: two lines so the source URL never overlaps date / page number.
    // Line 1 (upper): full source URL, clickable.
    // Line 2 (lower): export date (centered) + page X of Y (right).
    const footerLine1Y = A4_HEIGHT_MM - 12;
    const footerLine2Y = A4_HEIGHT_MM - 7;
    doc.setDrawColor(220);
    doc.line(
      MARGIN_X_MM,
      footerLine1Y - 4,
      A4_WIDTH_MM - MARGIN_X_MM,
      footerLine1Y - 4,
    );

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(110);
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

    doc.setTextColor(110);
    doc.text(`Generated on: ${exportDate}`, MARGIN_X_MM, footerLine2Y);
    doc.text(
      `Page ${i} of ${total}`,
      A4_WIDTH_MM - MARGIN_X_MM,
      footerLine2Y,
      {align: 'right'},
    );
  }
}

export function appendRelatedLinks(doc: JsPDFType, footnotes: Footnote[]): void {
  if (footnotes.length === 0) return;

  doc.addPage();
  let y = MARGIN_TOP_MM;

  const writeHeading = () => {
    // Sized to match the article's H2 headings (20px in the rendered
    // bitmap ≈ 13pt in native PDF text).
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(...PRIMARY_RGB);
    doc.text('Related links', MARGIN_X_MM, y);
    y += 7;
  };
  writeHeading();

  for (const fn of footnotes) {
    // Capitalize the first letter of the link text for a cleaner appendix.
    const displayText = fn.text
      ? fn.text.charAt(0).toUpperCase() + fn.text.slice(1)
      : fn.url;
    // Estimate space: label line + URL line + spacing.
    const labelLines = doc.splitTextToSize(
      `[${fn.n}] ${displayText}`,
      CONTENT_WIDTH_MM,
    ) as string[];
    const urlLines = doc.splitTextToSize(
      fn.url,
      CONTENT_WIDTH_MM - 5,
    ) as string[];
    const blockHeight = labelLines.length * 5 + urlLines.length * 4 + 4;

    if (y + blockHeight > A4_HEIGHT_MM - MARGIN_BOTTOM_MM) {
      doc.addPage();
      y = MARGIN_TOP_MM;
      writeHeading();
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20);
    doc.text(labelLines, MARGIN_X_MM, y);
    y += labelLines.length * 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...PRIMARY_RGB);
    // Only the first line carries the link annotation; the URL is visually
    // continuous and clicking the first segment is sufficient in all
    // mainstream PDF readers.
    doc.textWithLink(urlLines[0], MARGIN_X_MM + 5, y, {url: fn.url});
    for (let i = 1; i < urlLines.length; i++) {
      y += 4;
      doc.text(urlLines[i], MARGIN_X_MM + 5, y);
    }
    y += 6;
  }
}

export async function generatePdf(opts: GeneratePdfOptions): Promise<void> {
  const [{jsPDF}, html2canvasMod] = await Promise.all([
    import('jspdf'),
    import('html2canvas'),
  ]);
  const html2canvas = html2canvasMod.default;

  const {root, footnotes} = buildRenderRoot(
    opts.articleEl,
    opts.includeImages,
    opts.siteBase,
    opts.sourceUrl,
  );

  // Off-screen mounting so html2canvas can measure real layout.
  const stage = document.createElement('div');
  stage.style.position = 'fixed';
  stage.style.left = '-10000px';
  stage.style.top = '0';
  stage.style.background = '#ffffff';
  stage.appendChild(root);
  document.body.appendChild(stage);

  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
    compress: true,
  });

  try {
    // Let layout settle (web fonts, lazy images) before snapshotting.
    await new Promise((r) => requestAnimationFrame(() => r(null)));

    const canvas = await html2canvas(root, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: RENDER_WIDTH_PX,
      width: RENDER_WIDTH_PX,
    });

    // Map the rendered bitmap onto the PDF content area, slicing across
    // pages. We draw the full image at a negative Y offset per page and rely
    // on the page boundary to clip the visible portion.
    const pageContentHeightMM = A4_HEIGHT_MM - MARGIN_TOP_MM - MARGIN_BOTTOM_MM;
    const imgWidthMM = CONTENT_WIDTH_MM;
    const imgHeightMM = (canvas.height * imgWidthMM) / canvas.width;
    const imgData = canvas.toDataURL('image/jpeg', 0.92);

    let renderedMM = 0;
    let pageIndex = 0;
    while (renderedMM < imgHeightMM) {
      if (pageIndex > 0) doc.addPage();
      const y = MARGIN_TOP_MM - renderedMM;
      doc.addImage(
        imgData,
        'JPEG',
        MARGIN_X_MM,
        y,
        imgWidthMM,
        imgHeightMM,
        undefined,
        'FAST',
      );
      // Mask any image content bleeding into the top/bottom margins on every
      // page after the first / before the last so header & footer stay clean.
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, A4_WIDTH_MM, MARGIN_TOP_MM - 2, 'F');
      doc.rect(
        0,
        A4_HEIGHT_MM - MARGIN_BOTTOM_MM + 2,
        A4_WIDTH_MM,
        MARGIN_BOTTOM_MM,
        'F',
      );
      renderedMM += pageContentHeightMM;
      pageIndex += 1;
    }

    appendRelatedLinks(doc, footnotes);

    const breadcrumbText = opts.breadcrumbs
      .map((b) => b.label)
      .filter(Boolean)
      .join(' / ');
    drawHeaderFooter(doc, breadcrumbText, opts.sourceUrl, opts.exportDate);

    doc.save(`${sanitizeFilename(opts.title)}.pdf`);
  } finally {
    stage.remove();
  }
}

