import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import PDFDownload from '../PDFDownload';

export default function PDFDownloadInjector(): null {
  const location = useLocation();

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const h1 = document.querySelector('.theme-doc-markdown h1');
      
      if (h1 && !h1.querySelector('.pdf-download-button')) {
        // Create a container for the PDF button
        const container = document.createElement('div');
        container.className = 'pdf-download-container';
        
        // Render the PDFDownload component
        import('react-dom/client').then(({ createRoot }) => {
          const root = createRoot(container);
          root.render(React.createElement(PDFDownload));
        });
        
        h1.appendChild(container);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}