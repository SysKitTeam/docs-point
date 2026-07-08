/**
 * DOM -> flat inline `InlineRun[]` extraction.
 *
 * Walks element subtrees and emits a list of styled text fragments,
 * collapsing whitespace and merging adjacent same-style runs.
 */

import type {InlineRun} from './types';
import {collapse, isFootnoteCandidate, toAbsoluteUrl} from './utils';

interface InlineContext {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string;
  httpMethod?: string;
}

export function extractInline(
  node: Node,
  ctx: InlineContext,
  siteBase: string,
  pageUrl: string,
  out: InlineRun[],
): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = (node.textContent ?? '')
      .replace(/[\u00ad\u200b\u200c\u200d\ufeff]/g, '') // soft hyphen + zero-width chars unsupported by standard PDF fonts
      .replace(/[\u2794\u27a1\u2192\u21d2\u279c\u279e\u27a4]/g, '-'); // arrows unsupported by standard PDF fonts
    if (!text) return;
    out.push({
      text,
      bold: ctx.bold,
      italic: ctx.italic,
      code: ctx.code,
      href: ctx.href,
      httpMethod: ctx.httpMethod,
    });
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const el = node as HTMLElement;
  const tag = el.tagName.toLowerCase();

  // Skip elements that shouldn't appear inline.
  if (tag === 'br') {
    out.push({text: '\n'});
    return;
  }
  if (tag === 'script' || tag === 'style') return;

  const nextCtx: InlineContext = {...ctx};
  if (tag === 'strong' || tag === 'b') nextCtx.bold = true;
  if (tag === 'em' || tag === 'i') nextCtx.italic = true;
  if (tag === 'code' && !ctx.code) nextCtx.code = true;
  // Detect <HttpMethod> badges rendered as <span class="http-method ...">
  if (tag === 'span' && el.classList.contains('http-method')) {
    const text = (el.textContent ?? '').trim().toUpperCase();
    if (text) {
      out.push({
        text,
        httpMethod: text,
      });
      return;
    }
  }
  if (tag === 'a') {
    const raw = el.getAttribute('href') ?? '';
    if (isFootnoteCandidate(raw)) {
      // Keep hash-only links (e.g. "#inventory") as-is so the renderer
      // can wire them as internal PDF anchor links to the target heading.
      nextCtx.href = raw.startsWith('#')
        ? raw
        : toAbsoluteUrl(raw, siteBase, pageUrl);
    }
  }

  el.childNodes.forEach((child) =>
    extractInline(child, nextCtx, siteBase, pageUrl, out),
  );
}

export function inlineFromElement(
  el: HTMLElement,
  siteBase: string,
  pageUrl: string,
): InlineRun[] {
  const runs: InlineRun[] = [];
  el.childNodes.forEach((child) =>
    extractInline(child, {}, siteBase, pageUrl, runs),
  );
  return normalizeRuns(runs);
}

/** Merge adjacent runs with identical styling and collapse whitespace. */
export function normalizeRuns(runs: InlineRun[]): InlineRun[] {
  const out: InlineRun[] = [];
  for (const r of runs) {
    if (!r.text) continue;
    // Preserve explicit \n (from <br>) — split into its own run.
    const parts = r.text.split(/(\n)/);
    for (const part of parts) {
      if (!part) continue;
      const piece: InlineRun = {
        text: part === '\n' ? '\n' : collapse(part),
        bold: r.bold,
        italic: r.italic,
        code: r.code,
        href: r.href,
        httpMethod: r.httpMethod,
      };
      if (!piece.text) continue;
      const prev = out[out.length - 1];
      if (
        prev &&
        prev.bold === piece.bold &&
        prev.italic === piece.italic &&
        prev.code === piece.code &&
        prev.href === piece.href &&
        prev.httpMethod === piece.httpMethod &&
        prev.text !== '\n' &&
        piece.text !== '\n'
      ) {
        prev.text += piece.text;
      } else {
        out.push(piece);
      }
    }
  }
  // Collapse consecutive newline runs into a single newline. Markdown
  // `<br/>` followed by the text node's own leading "\n" would otherwise
  // render as a blank row between e.g. "Please note:" and the next line.
  const collapsed: InlineRun[] = [];
  for (const r of out) {
    const prev = collapsed[collapsed.length - 1];
    if (prev && prev.text === '\n' && r.text === '\n') continue;
    collapsed.push(r);
  }
  out.length = 0;
  out.push(...collapsed);
  // Trim leading/trailing whitespace-only runs.
  while (out.length && !out[0].text.trim() && out[0].text !== '\n') out.shift();
  while (
    out.length &&
    !out[out.length - 1].text.trim() &&
    out[out.length - 1].text !== '\n'
  )
    out.pop();
  return out;
}
