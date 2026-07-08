import React, {useCallback, useState} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

function getExportDate(): string {
  // Format: "June 2, 2026"
  const d = new Date();
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PdfExportButton(): React.ReactNode {
  const {metadata} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = useCallback(async () => {
    if (!ExecutionEnvironment.canUseDOM) return;
    const articleEl = document.querySelector('article') as HTMLElement | null;
    if (!articleEl) return;

    setBusy(true);
    setError(null);
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
        description: metadata.description,
        sourceUrl,
        siteBase,
        breadcrumbs,
        // Images are always included: admonitions and surrounding text often
        // reference what's shown in screenshots, so a text-only export would
        // be confusing (numbered callouts with no image to anchor them).
        includeImages: true,
        exportDate: getExportDate(),
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[PdfExportButton] generation failed', err);
      setError(
        'PDF generation failed. Please try again or use your browser\u2019s Print to PDF option.',
      );
    } finally {
      setBusy(false);
    }
  }, [metadata, siteConfig]);

  return (
    <div className={styles.wrapper} data-pdf-export-button="">
      <button
        type="button"
        className={styles.trigger}
        onClick={() => run()}
        disabled={busy}
      >
        <span>{busy ? 'Generating\u2026' : 'Export PDF'}</span>
      </button>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
