/**
 * Pure utility helpers shared across the PDF pipeline.
 *
 * - Filename / text helpers
 * - URL helpers (link normalization)
 * - Style comparison + run flattening
 * - Tag classification
 * - Color helpers (admonition palette + opacity fallback)
 */

import {PRIMARY_RGB} from './constants';
import type {InlineRun} from './types';

// --- Filename utility -----------------------------------------------------

export function sanitizeFilename(title: string): string {
  return (
    title
      .replace(/[\\/:*?"<>|,]+/g, '')
      .replace(/\./g, '-')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase() || 'syskit-point-article'
  );
}

// --- Text helpers ---------------------------------------------------------

export function collapse(text: string): string {
  return text.replace(/\s+/g, ' ');
}

export function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

// --- Link normalization ---------------------------------------------------

export function isFootnoteCandidate(href: string): boolean {
  if (!href) return false;
  const trimmed = href.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('#')) return false;
  if (/^(mailto:|tel:|javascript:)/i.test(trimmed)) return false;
  return true;
}

export function toAbsoluteUrl(
  href: string,
  siteBase: string,
  pageUrl: string,
): string {
  try {
    return new URL(href, pageUrl).toString();
  } catch {
    try {
      return new URL(href, siteBase).toString();
    } catch {
      return href;
    }
  }
}

// --- Inline run helpers ---------------------------------------------------

export function sameStyle(a: InlineRun, b: InlineRun): boolean {
  return (
    !!a.bold === !!b.bold &&
    !!a.italic === !!b.italic &&
    !!a.code === !!b.code &&
    a.href === b.href
  );
}

export function runsToPlainText(runs: InlineRun[]): string {
  return runs.map((r) => r.text).join('').replace(/\s+/g, ' ').trim();
}

// --- Tag classification ---------------------------------------------------

export function isHeadingTag(
  tag: string,
): tag is 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' {
  return /^h[1-6]$/.test(tag);
}

export function isBlockTag(tag: string): boolean {
  return (
    isHeadingTag(tag) ||
    [
      'p',
      'ul',
      'ol',
      'pre',
      'table',
      'blockquote',
      'hr',
      'figure',
      'div',
      'section',
      'article',
    ].includes(tag)
  );
}

// --- Color helpers --------------------------------------------------------

export function admonitionColor(kind: string): [number, number, number] {
  switch (kind.toLowerCase()) {
    case 'warning':
    case 'caution':
      return [217, 119, 6]; // amber
    case 'danger':
      return [200, 32, 32]; // red
    case 'tip':
    case 'success':
      return [22, 128, 73]; // green
    case 'info':
    case 'note':
    default:
      return PRIMARY_RGB;
  }
}

/**
 * Mix the given RGB color toward white by `amount` (0 = original, 1 = white).
 * Used as a fallback for the admonition background tint when the PDF viewer
 * does not honor jsPDF's GState opacity plugin.
 */
export function tintColor(
  rgb: [number, number, number],
  amount: number,
): [number, number, number] {
  const t = Math.max(0, Math.min(1, amount));
  const mix = (c: number) => Math.round(c + (255 - c) * t);
  return [mix(rgb[0]), mix(rgb[1]), mix(rgb[2])];
}
