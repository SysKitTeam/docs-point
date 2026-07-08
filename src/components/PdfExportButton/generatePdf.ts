/**
 * Client-side PDF generator for Syskit Point doc articles.
 *
 * Public entry point. Renders the article into a PDF using jsPDF's native
 * text APIs so the resulting document contains real, selectable, searchable
 * text (not a rasterized snapshot).
 *
 * Pipeline (see `./pdf/` for the per-stage modules):
 *  1. Pre-load any lazy images on the live page so the canvas rasterizer
 *     can paint them (`./pdf/images`).
 *  2. Clone the live <article>, strip non-content chrome
 *     (`./pdf/extractBlocks#stripNonContent`).
 *  3. Walk the cloned DOM into a flat list of typed blocks
 *     (`./pdf/extractBlocks`).
 *  4. Render the cover page, then each block, then the back page
 *     (`./pdf/coverPage`, `./pdf/renderer`, `./pdf/backPage`).
 *  5. Wire cover anchors to their target pages, build the bookmark
 *     outline, and stamp every interior page with the header/footer
 *     band (`./pdf/chrome`).
 */

import type {GeneratePdfOptions} from './pdf/types';
import {extractBlocks, stripNonContent} from './pdf/extractBlocks';
import {loadWhiteLogoAsPng, preloadArticleImages} from './pdf/images';
import {Renderer} from './pdf/renderer';
import {renderCoverPage} from './pdf/coverPage';
import {renderBackPage} from './pdf/backPage';
import {buildOutline, drawHeaderFooter} from './pdf/chrome';
import {CONTENT_WIDTH_MM, MARGIN_TOP_MM} from './pdf/constants';
import {runsToPlainText, sanitizeFilename} from './pdf/utils';

// Public re-exports so existing imports of this file keep working.
export type {GeneratePdfOptions, PdfBreadcrumb} from './pdf/types';
export {sanitizeFilename} from './pdf/utils';
export {drawHeaderFooter} from './pdf/chrome';

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
  let blocks = extractBlocks(clone, opts.siteBase, opts.sourceUrl);

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
  } else {
    // Render the extracted H1 so the description appears after it.
    renderer.renderBlock(first, 0, CONTENT_WIDTH_MM);
    blocks = blocks.slice(1);
  }

  // Render the frontmatter description as a muted paragraph below the title.
  if (opts.description) {
    renderer.renderDescription(opts.description);
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

  // --- Wire in-content anchor links (#id) to their target headings ---
  for (const link of renderer.anchorLinks) {
    const target = renderer.headings.find((h) => h.id === link.href.slice(1));
    if (target) {
      doc.setPage(link.page);
      doc.link(link.x, link.y, link.w, link.h, {pageNumber: target.page});
    }
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
