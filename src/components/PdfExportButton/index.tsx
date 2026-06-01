import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

function getExportDate(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function articleHasImages(): boolean {
  if (!ExecutionEnvironment.canUseDOM) return false;
  const article = document.querySelector('article');
  if (!article) return false;
  return article.querySelector('img, picture') !== null;
}

export default function PdfExportButton(): React.ReactNode {
  const {metadata} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [hasImages, setHasImages] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Detect images on mount + when the route's content changes.
  useEffect(() => {
    setHasImages(articleHasImages());
  }, [metadata.permalink]);

  // Close the menu when clicking outside.
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const run = useCallback(
    async (includeImages: boolean) => {
      if (!ExecutionEnvironment.canUseDOM) return;
      const articleEl = document.querySelector('article') as HTMLElement | null;
      if (!articleEl) return;

      setOpen(false);
      setBusy(true);
      try {
        const origin = siteConfig.url.replace(/\/+$/, '');
        const baseUrl = siteConfig.baseUrl.startsWith('/')
          ? siteConfig.baseUrl
          : `/${siteConfig.baseUrl}`;
        const siteBase = `${origin}${baseUrl}`;
        const sourceUrl = `${origin}${metadata.permalink}`;
        const breadcrumbs = (
          (metadata as unknown as {breadcrumbs?: {label?: string}[]})
            .breadcrumbs ?? []
        )
          .map((b) => ({label: b.label ?? ''}))
          .filter((b) => b.label);

        const {generatePdf} = await import('./generatePdf');
        await generatePdf({
          articleEl,
          title: metadata.title,
          sourceUrl,
          siteBase,
          breadcrumbs,
          includeImages,
          exportDate: getExportDate(),
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[PdfExportButton] generation failed', err);
        if (typeof window !== 'undefined') {
          window.alert(
            'Sorry, generating the PDF failed. Please try again or use your browser\u2019s Print to PDF option.',
          );
        }
      } finally {
        setBusy(false);
      }
    },
    [metadata, siteConfig],
  );

  // Articles without images get a single-action button (no dropdown), since
  // the two export modes would produce identical output.
  if (!hasImages) {
    return (
      <div
        ref={wrapperRef}
        className={styles.wrapper}
        data-pdf-export-button=""
      >
        <button
          type="button"
          className={styles.trigger}
          onClick={() => run(false)}
          disabled={busy}
        >
          <span>{busy ? 'Generating\u2026' : 'Export PDF'}</span>
        </button>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      data-pdf-export-button=""
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        disabled={busy}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{busy ? 'Generating\u2026' : 'Export PDF'}</span>
        {!busy && (
          <svg
            className={styles.caret}
            viewBox="0 0 10 10"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M1 3 L5 7 L9 3 Z" />
          </svg>
        )}
      </button>
      {open && !busy && (
        <div className={styles.menu} role="menu">
          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => run(true)}
          >
            PDF with images
          </button>
          <button
            type="button"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => run(false)}
          >
            PDF (text only)
          </button>
        </div>
      )}
    </div>
  );
}
