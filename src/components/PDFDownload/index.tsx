import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './PDFDownload.css';

const PDFDownload: React.FC = () => {
  const generatePDF = async () => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    try {
      // Get the main article content
      const article = document.querySelector('article[itemProp="articleBody"]') || 
                     document.querySelector('.theme-doc-markdown') ||
                     document.querySelector('main');
      
      if (!article) {
        console.error('Could not find article content');
        return;
      }

      // Get the page title and breadcrumb path
      const titleElement = document.querySelector('h1');
      const pageTitle = titleElement?.textContent || 'Syskit Point Documentation';
      
      // Generate breadcrumb-like path from current URL
      const generateArticlePath = () => {
        const currentPath = window.location.pathname;
        // Remove base path and split into segments
        const pathSegments = currentPath
          .replace('/point/', '') // Remove base URL
          .split('/')
          .filter(segment => segment && segment !== 'point'); // Remove empty segments
        
        if (pathSegments.length === 0) {
          return 'Home';
        }
        
        // Convert path segments to readable format
        const readableSegments = pathSegments.map(segment => 
          segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
        
        return readableSegments.join(' › ');
      };
      
      const articlePath = generateArticlePath();

      // Create a temporary container for PDF content
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '210mm'; // A4 width
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.padding = '20px';
      tempContainer.style.fontFamily = 'Arial, sans-serif';
      tempContainer.style.fontSize = '14px';
      tempContainer.style.lineHeight = '1.6';
      tempContainer.style.color = '#1c1e21'; // Force light mode text color
      
      // Force light mode by removing dark theme class and adding light theme styles
      tempContainer.setAttribute('data-theme', 'light');

      // Clone the article content
      const clonedArticle = article.cloneNode(true) as HTMLElement;
      
      // Remove unwanted elements
      const elementsToRemove = clonedArticle.querySelectorAll(
        '.theme-doc-breadcrumbs, .pagination-nav, .theme-doc-footer, .theme-last-updated, nav, .navbar, .sidebar, .pdf-download-button, .hash-link'
      );
      elementsToRemove.forEach(el => el.remove());

      // Force light mode styles on all elements
      const allElements = clonedArticle.querySelectorAll('*');
      allElements.forEach((element: HTMLElement) => {
        // Reset any dark mode background colors
        if (element.style.backgroundColor) {
          element.style.backgroundColor = 'white';
        }
        // Reset any dark mode text colors
        if (element.style.color && element.style.color.includes('rgb')) {
          element.style.color = '#1c1e21';
        }
      });

      // Add title and content to temp container
      tempContainer.innerHTML = `
        <div style="margin-bottom: 20px; border-bottom: 2px solid #5700AF; padding-bottom: 10px;">
          <h1 style="color: #5700AF; margin: 0 0 6px 0; font-size: 24px;">${pageTitle}</h1>
          <div style="color: #888; font-size: 13px; margin-bottom: 8px; font-weight: 400;">${articlePath}</div>
          <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">Generated from docs.syskit.com/point</p>
        </div>
        <div>${clonedArticle.innerHTML}</div>
      `;

      // Apply consistent light mode styles to all elements
      const applyLightModeStyles = (container: HTMLElement) => {
        // Main text elements
        const textElements = container.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, th, span, div, blockquote, pre, code');
        textElements.forEach((element: HTMLElement) => {
          element.style.color = '#1c1e21';
          element.style.backgroundColor = 'transparent';
        });

        // Code blocks
        const codeBlocks = container.querySelectorAll('pre, code');
        codeBlocks.forEach((element: HTMLElement) => {
          element.style.backgroundColor = '#f6f8fa';
          element.style.color = '#24292f';
          element.style.border = '1px solid #d0d7de';
          element.style.borderRadius = '6px';
          element.style.padding = element.tagName === 'PRE' ? '12px' : '4px 8px';
        });

        // Tables
        const tables = container.querySelectorAll('table');
        tables.forEach((table: HTMLElement) => {
          table.style.fontSize = '12px';
          table.style.borderCollapse = 'collapse';
          table.style.width = '100%';
          table.style.backgroundColor = 'white';
          table.style.color = '#1c1e21';
        });

        const tableCells = container.querySelectorAll('td, th');
        tableCells.forEach((cell: HTMLElement) => {
          cell.style.backgroundColor = 'white';
          cell.style.color = '#1c1e21';
          cell.style.border = '1px solid #d0d7de';
          cell.style.padding = '8px 12px';
        });

        const tableHeaders = container.querySelectorAll('th');
        tableHeaders.forEach((header: HTMLElement) => {
          header.style.backgroundColor = '#f6f8fa';
          header.style.fontWeight = '600';
        });

        // Admonitions/Info boxes
        const admonitions = container.querySelectorAll('.theme-admonition, [class*="admonition"]');
        admonitions.forEach((admonition: HTMLElement) => {
          admonition.style.backgroundColor = '#f0f4ff';
          admonition.style.border = '1px solid #5700AF';
          admonition.style.borderRadius = '6px';
          admonition.style.padding = '12px';
          admonition.style.color = '#1c1e21';
        });
      };

      applyLightModeStyles(tempContainer);

      // Style images for PDF
      const images = tempContainer.querySelectorAll('img');
      images.forEach((img: HTMLImageElement) => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '12px auto';
      });

      // Append to body temporarily
      document.body.appendChild(tempContainer);

      // Append to body temporarily for measurement
      document.body.appendChild(tempContainer);
      
      // Wait for layout to settle
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Create PDF with simpler approach
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Generate canvas from the full content
      const canvas = await html2canvas(tempContainer, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      // Remove temporary container
      document.body.removeChild(tempContainer);

      // Calculate dimensions
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // A4 dimensions with margins (in pixels at 150 DPI)
      const pageWidth = (pdfWidth - 20) * 5.67; // 20mm margins, convert to pixels
      const pageHeight = (pdfHeight - 40) * 5.67; // 40mm margins top/bottom
      
      // Scale to fit page width
      const scale = pageWidth / imgWidth;
      const scaledHeight = imgHeight * scale;
      
      // Calculate how many pages we need
      const pagesNeeded = Math.ceil(scaledHeight / pageHeight);
      
      for (let i = 0; i < pagesNeeded; i++) {
        if (i > 0) {
          pdf.addPage();
        }

        // Calculate the portion of the image for this page
        const sourceY = (i * pageHeight) / scale;
        const sourceHeight = Math.min(pageHeight / scale, imgHeight - sourceY);

        // Create a temporary canvas for this page portion
        const pageCanvas = document.createElement('canvas');
        const pageCtx = pageCanvas.getContext('2d');

        pageCanvas.width = imgWidth;
        pageCanvas.height = sourceHeight;

        // Draw the correct portion of the main canvas using cropping
        pageCtx.fillStyle = '#ffffff';
        pageCtx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        pageCtx.drawImage(
          canvas,
          0, sourceY, // source x, source y
          imgWidth, sourceHeight, // source width, source height
          0, 0, // destination x, y
          imgWidth, sourceHeight // destination width, height
        );

        // Convert to image and add to PDF
        const pageImgData = pageCanvas.toDataURL('image/png');
        const pdfImgHeight = (sourceHeight * scale * (pdfWidth - 20)) / pageWidth;

        pdf.addImage(pageImgData, 'PNG', 10, 20, pdfWidth - 20, pdfImgHeight);
      }

      // Generate filename from title
      const filename = pageTitle
        .replace(/[^a-z0-9]/gi, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '')
        .toLowerCase() + '.pdf';

      // Save the PDF
      pdf.save(filename);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <button
      className="pdf-download-button"
      onClick={generatePDF}
      title="Download this page as PDF"
      type="button"
    >
      <span className="pdf-icon">📄</span>
      <span className="pdf-text">PDF</span>
    </button>
  );
};

export default PDFDownload;