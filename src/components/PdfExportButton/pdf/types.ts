/**
 * Shared types for the PDF generation pipeline.
 *
 * These describe the public API (`GeneratePdfOptions`, `PdfBreadcrumb`)
 * and the internal block / inline model produced by the DOM-walking
 * extractor and consumed by the renderer.
 */

export interface PdfBreadcrumb {
  label: string;
}

export interface GeneratePdfOptions {
  articleEl: HTMLElement;
  title: string;
  description: string;
  sourceUrl: string;
  siteBase: string;
  breadcrumbs: PdfBreadcrumb[];
  includeImages: boolean;
  exportDate: string;
}

// --- Inline / block model -------------------------------------------------

export interface InlineRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string; // absolute URL when this run is a link
  httpMethod?: string; // HTTP method badge (GET, POST, etc.)
}

export interface ListItem {
  runs: InlineRun[];
  children: Block[]; // nested lists or sub-blocks
}

export interface TableCellImage {
  src: string;
  alt: string;
  naturalWidth: number;
  naturalHeight: number;
}

export interface TableCell {
  images: TableCellImage[];
  runs: InlineRun[];
}

export type Block =
  | {type: 'heading'; level: 1 | 2 | 3 | 4; runs: InlineRun[]; id?: string}
  | {type: 'paragraph'; runs: InlineRun[]}
  | {type: 'list'; ordered: boolean; items: ListItem[]; level: number}
  | {type: 'code'; lines: string[]}
  | {type: 'table'; rows: TableCell[][]; header: boolean}
  | {type: 'admonition'; kind: string; title: string; children: Block[]}
  | {type: 'image'; src: string; alt: string}
  | {type: 'video'; url: string; title: string}
  | {type: 'hr'};

// --- Image / cover / back-page support ------------------------------------

export interface ImageData {
  url: string;
  format: 'PNG' | 'JPEG';
  width: number;
  height: number;
}

export interface CoverTocRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface BackPageLink {
  label: string;
  description: string;
  url: string;
}
