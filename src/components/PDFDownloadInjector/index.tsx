import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useLocation } from '@docusaurus/router';
import PDFDownload from '../PDFDownload';

const PDFDownloadInjector: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const injectPDFButton = () => {
      // Wait for the page to be fully rendered
      setTimeout(() => {
        // Check if this is a page that should have a PDF button
        const shouldShowPDFButton = () => {
          // Don't show on home.mdx or home page
          if (location.pathname === '/' || location.pathname === '/point/' || location.pathname.includes('/home')) {
            return false;
          }
          
          // Don't show on pages with DocCardList (landing/index pages)
          const docCardList = document.querySelector('[class*="docCardList"], .theme-doc-card-list, .card-list');
          if (docCardList) {
            return false;
          }

          // Check if the page content contains <DocCardList /> in the source
          const mainContent = document.querySelector('article[itemProp="articleBody"], .theme-doc-markdown, main');
          if (mainContent) {
            // Look for DocCardList component indicators
            const docCardElements = mainContent.querySelectorAll('[class*="docCard"], [class*="card-"], .card');
            if (docCardElements.length > 3) { // Landing pages usually have multiple cards
              return false;
            }
          }

          // Don't show on pages that end with '/' (typically index pages)
          if (location.pathname.endsWith('/')) {
            const h1 = document.querySelector('h1');
            const h1Text = h1?.textContent?.toLowerCase() || '';
            // Common patterns for landing/index pages
            if (h1Text.includes('documentation') || h1Text.includes('welcome') || h1Text.includes('getting started')) {
              const hasMultipleLinks = document.querySelectorAll('main a').length > 10;
              if (hasMultipleLinks) {
                return false;
              }
            }
          }

          return true;
        };

        // Remove any existing PDF buttons
        const existingButtons = document.querySelectorAll('.pdf-download-injected');
        existingButtons.forEach(button => button.remove());

        if (!shouldShowPDFButton()) {
          return;
        }

        // Find the main article title (h1)
        const h1Element = document.querySelector('article h1, main h1, .theme-doc-markdown h1');
        
        if (h1Element && !h1Element.querySelector('.pdf-download-button')) {
          const h1 = h1Element as HTMLElement;
          
          // Ensure h1 has inline-flex layout for proper vertical centering
          const computedStyle = window.getComputedStyle(h1);
          if (computedStyle.display !== 'flex' && computedStyle.display !== 'inline-flex') {
            h1.style.display = 'inline-flex';
            h1.style.alignItems = 'center';
            h1.style.flexWrap = 'wrap';
            h1.style.gap = '12px';
          }

          // Create a container for the PDF button
          const buttonContainer = document.createElement('span');
          buttonContainer.className = 'pdf-download-injected';
          buttonContainer.style.display = 'inline-flex';
          buttonContainer.style.alignItems = 'center';

          // Create and render the PDF button
          const root = createRoot(buttonContainer);
          root.render(<PDFDownload />);

          // Insert the button after the h1 text
          h1.appendChild(buttonContainer);
        }
      }, 100);
    };

    injectPDFButton();
  }, [location.pathname]);

  return null;
};

export default PDFDownloadInjector;