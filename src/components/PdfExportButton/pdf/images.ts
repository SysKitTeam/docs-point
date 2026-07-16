/**
 * Image acquisition helpers.
 *
 * - `preloadArticleImages`: forces lazy <img>s to decode before render.
 * - `imageToDataUrl`: rasterizes an already-decoded live <img> via canvas.
 * - `loadWhiteLogoAsPng`: fetches the bundled white Syskit logo and crops
 *   its transparent padding so it aligns flush on the cover page.
 * - `clearImageCache`: resets the lookup cache after an export cycle.
 */

import type {ImageData} from './types';

// --- Image element lookup cache -------------------------------------------
// Built lazily on the first `imageToDataUrl` call so every subsequent lookup
// is O(1) instead of scanning `document.images` each time (was O(n²) for
// articles with many images).

let imageMap: Map<string, HTMLImageElement> | null = null;

function getImageMap(): Map<string, HTMLImageElement> {
  if (imageMap) return imageMap;
  imageMap = new Map();
  for (const img of Array.from(document.images)) {
    if (!img.complete || !img.naturalWidth) continue;
    for (const key of [img.currentSrc, img.src].filter(Boolean)) {
      if (!imageMap.has(key)) imageMap.set(key, img);
    }
  }
  return imageMap;
}

/** Reset the image lookup cache. Call after an export cycle completes. */
export function clearImageCache(): void {
  imageMap = null;
}

/**
 * Force any lazy-loaded images inside the article to decode so the
 * synchronous renderer can paint them. Uses HTMLImageElement.decode() with
 * a per-image timeout so the export never hangs on a slow/missing image.
 */
export async function preloadArticleImages(
  articleEl: HTMLElement,
): Promise<void> {
  const imgs = Array.from(articleEl.querySelectorAll('img'));
  const TIMEOUT_MS = 5000;
  await Promise.all(
    imgs.map((img) => {
      // Promote lazy images so the browser starts loading them now.
      if (img.loading === 'lazy') img.loading = 'eager';
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      const decodePromise =
        typeof img.decode === 'function'
          ? img.decode().catch(() => undefined)
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), {once: true});
              img.addEventListener('error', () => resolve(), {once: true});
            });
      const timeout = new Promise<void>((resolve) =>
        setTimeout(resolve, TIMEOUT_MS),
      );
      return Promise.race([decodePromise, timeout]);
    }),
  );
}

/**
 * Convert a same-origin <img> into a data URL using a transient <canvas>.
 * Returns null for images that taint the canvas (cross-origin without CORS)
 * or fail to load — the renderer then silently skips them.
 *
 * Uses a lazily-built lookup map so repeated calls are O(1) per image
 * instead of scanning `document.images` each time.
 *
 * Opaque images (no transparent pixels) are encoded as JPEG at 85% quality
 * to significantly reduce the data URL size for large screenshots. Images
 * with any transparency are kept as PNG to preserve alpha.
 */
export function imageToDataUrl(src: string): ImageData | null {
  if (!src) return null;
  const map = getImageMap();
  const img = map.get(src);
  if (!img || !img.complete || !img.naturalWidth) return null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0);

    // Detect transparency by sampling the alpha channel. If the image is
    // fully opaque, JPEG at 95% quality is much smaller than PNG (often
    // 5-10× for photographic screenshots).
    let hasAlpha = false;
    try {
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 250) { hasAlpha = true; break; }
      }
    } catch {
      // getImageData can throw on tainted canvases; default to PNG.
      hasAlpha = true;
    }

    const format = hasAlpha ? 'PNG' : 'JPEG';
    // toDataURL throws SecurityError for tainted canvases.
    const url = hasAlpha
      ? canvas.toDataURL('image/png')
      : canvas.toDataURL('image/jpeg', 0.95);
    return {
      url,
      format,
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  } catch {
    return null;
  }
}

/**
 * Fetch the bundled site logo (PNG) and rasterize it via an off-screen
 * canvas, trimming transparent padding so it aligns flush with the cover's
 * left text margin. Returns null when the logo can't be loaded — the
 * cover/header then falls back to text-only branding.
 */
export async function loadWhiteLogoAsPng(
  siteBase: string,
): Promise<{url: string; width: number; height: number} | null> {
  // Resolve the logo relative to the page the user is currently on. The
  // configured `siteBase` may point at the production origin (from
  // siteConfig.url) which would fail in dev / staging due to CORS. The
  // current page's origin + baseUrl is the only origin we can fetch from
  // without CORS and is guaranteed to host the static asset.
  let logoUrl: string;
  try {
    const path = new URL(siteBase).pathname.replace(/\/+$/, '/') || '/';
    logoUrl = new URL(
      `${path}img/syskit-horizontal-white-logotype.png`.replace(/\/+/g, '/'),
      window.location.origin,
    ).toString();
  } catch {
    logoUrl = '/img/syskit-horizontal-white-logotype.png';
  }
  try {
    const response = await fetch(logoUrl, {credentials: 'same-origin'});
    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.warn('[PdfExportButton] logo fetch failed', logoUrl, response.status);
      return null;
    }
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    try {
      const img = new Image();
      img.src = blobUrl;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('logo decode failed'));
      });
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;
      ctx.drawImage(img, 0, 0);

      // Trim transparent padding so the logo aligns flush with the cover's
      // left text margin. The source PNG has substantial empty space on all
      // sides which would otherwise visually indent the artwork.
      let trimmed: HTMLCanvasElement = canvas;
      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const {data, width: w, height: h} = imgData;
        let minX = w;
        let minY = h;
        let maxX = -1;
        let maxY = -1;
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            if (data[(y * w + x) * 4 + 3] > 10) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        if (maxX >= minX && maxY >= minY) {
          const tw = maxX - minX + 1;
          const th = maxY - minY + 1;
          const trimCanvas = document.createElement('canvas');
          trimCanvas.width = tw;
          trimCanvas.height = th;
          const tctx = trimCanvas.getContext('2d');
          if (tctx) {
            tctx.drawImage(canvas, minX, minY, tw, th, 0, 0, tw, th);
            trimmed = trimCanvas;
          }
        }
      } catch {
        // getImageData can throw if the canvas is tainted; fall back to the
        // untrimmed canvas in that case.
      }

      return {
        url: trimmed.toDataURL('image/png'),
        width: trimmed.width,
        height: trimmed.height,
      };
    } finally {
      URL.revokeObjectURL(blobUrl);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[PdfExportButton] logo load failed', err);
    return null;
  }
}
