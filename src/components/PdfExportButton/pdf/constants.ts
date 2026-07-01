/**
 * Page geometry, color palette, typography, and other layout constants.
 *
 * Everything in this file is a pure constant — no runtime state.
 */

import type {BackPageLink} from './types';

// --- Page geometry --------------------------------------------------------

export const A4_WIDTH_MM = 210;
export const A4_HEIGHT_MM = 297;
export const MARGIN_TOP_MM = 22;
export const MARGIN_BOTTOM_MM = 22;
export const MARGIN_X_MM = 15;
export const CONTENT_WIDTH_MM = A4_WIDTH_MM - MARGIN_X_MM * 2;
export const CONTENT_BOTTOM_MM = A4_HEIGHT_MM - MARGIN_BOTTOM_MM;

// --- Colors ---------------------------------------------------------------

// Syskit Point primary color (matches --ifm-color-primary in custom.css).
export const PRIMARY_RGB: [number, number, number] = [87, 0, 175];
export const TEXT_RGB: [number, number, number] = [26, 26, 26];
export const MUTED_RGB: [number, number, number] = [110, 110, 110];
export const CODE_BG_RGB: [number, number, number] = [244, 244, 244];
export const CODE_BORDER_RGB: [number, number, number] = [220, 220, 220];
export const WHITE_RGB: [number, number, number] = [255, 255, 255];

// Cover-only background (deeper than the primary).
export const COVER_BG_RGB: [number, number, number] = [35, 0, 86];

// --- Typography -----------------------------------------------------------

// jsPDF uses pt for font sizes; 1 pt ≈ 0.3528 mm.
export const FONT_BODY = 10;
export const FONT_H1 = 18;
export const FONT_H2 = 14;
export const FONT_H3 = 12;
export const FONT_H4 = 11;
export const FONT_CODE = 9;
export const FONT_SMALL = 9;

// Vertical rhythm helpers.
export const LINE_HEIGHT_FACTOR = 1.35;
export const PARAGRAPH_GAP_MM = 2.5;
export const HEADING_GAP_BEFORE_MM = 4.5;
export const HEADING_GAP_AFTER_MM = 1.5;
export const LIST_INDENT_MM = 6;

// --- Cover page copy ------------------------------------------------------

export const SNAPSHOT_DISCLAIMER =
  'This is a point-in-time snapshot of the Syskit Point documentation. ' +
  'For the most up-to-date information, always refer to the source article.';

// --- Back page link directory ---------------------------------------------

export const BACK_PAGE_LINKS: BackPageLink[] = [
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
