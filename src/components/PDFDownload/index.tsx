import React, { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import html2canvas from 'html2canvas';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './PDFDownload.css';

const PDFDownload: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  // Simple HTML-to-Canvas PDF generation (captures everything visually)
  const generatePDFFromHTML = async () => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    setIsGenerating(true);
    // Set cursor to wait for entire page
    document.body.style.cursor = 'wait';
    // Apply wait cursor to all elements to override any hover states
    const style = document.createElement('style');
    style.id = 'pdf-generating-cursor';
    style.textContent = '* { cursor: wait !important; }';
    document.head.appendChild(style);

    try {
      console.log('Starting HTML-based PDF generation...');
      
      // Get the main article content
      const article = document.querySelector('article[itemProp="articleBody"]') || 
                     document.querySelector('.theme-doc-markdown') ||
                     document.querySelector('main');
      
      if (!article) {
        alert('Could not find article content');
        return;
      }

      // Get page title (excluding the PDF button text)
      const titleElement = document.querySelector('h1');
      let pageTitle = 'Syskit Point Documentation';
      
      if (titleElement) {
        // Clone the h1 to avoid modifying the actual page
        const clonedTitle = titleElement.cloneNode(true) as HTMLElement;
        // Remove the PDF button from the clone
        const pdfButton = clonedTitle.querySelector('.pdf-download-button');
        if (pdfButton) {
          pdfButton.remove();
        }
        pageTitle = clonedTitle.textContent || 'Syskit Point Documentation';
      }
      
      // Clean title
      const cleanText = (text: string): string => {
        return text
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
          .replace(/[\u{2600}-\u{26FF}]/gu, '')
          .replace(/[\u{2700}-\u{27BF}]/gu, '')
          .replace(/\s+/g, ' ')
          .trim();
      };
      
      pageTitle = cleanText(pageTitle);

      // Clone article to avoid modifying the actual page
      const clonedArticle = article.cloneNode(true) as HTMLElement;
      
      // Create a container for rendering
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '210mm'; // A4 width
      container.style.backgroundColor = 'white';
      container.style.padding = '20mm';
      container.style.color = '#000';
      
      // Remove unwanted elements (including PDF button from h1)
      const unwantedSelectors = [
        '.pdf-download-button',
        '.pdf-download-injected',
        '.theme-doc-breadcrumbs',
        '.pagination-nav',
        '.theme-doc-footer',
        '.theme-last-updated',
        '.hash-link',
        '.edit-page-link'
      ];
      
      unwantedSelectors.forEach(selector => {
        clonedArticle.querySelectorAll(selector).forEach(el => el.remove());
      });
      
      // Extra cleanup: ensure PDF button is removed from h1 if it exists
      const h1InClone = clonedArticle.querySelector('h1');
      if (h1InClone) {
        const pdfButtons = h1InClone.querySelectorAll('.pdf-download-button, .pdf-download-injected');
        pdfButtons.forEach(btn => btn.remove());
      }
      
      container.appendChild(clonedArticle);
      document.body.appendChild(container);
      
      console.log('Identifying content blocks for smart page breaks...');
      
      // Extract all external links for the links section
      const externalLinks = new Map<string, string>(); // url -> link text
      const allLinks = clonedArticle.querySelectorAll('a[href]');
      allLinks.forEach(link => {
        const anchor = link as HTMLAnchorElement;
        const href = anchor.getAttribute('href');
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
          const linkText = anchor.textContent?.trim() || href;
          if (!externalLinks.has(href)) {
            externalLinks.set(href, linkText);
          }
        }
      });
      console.log(`Found ${externalLinks.size} unique external links`);
      
      // Create individual blocks for each element to allow proper page breaks
      // Group H2 with immediately following content (like H3, first paragraph)
      const contentBlocks: HTMLElement[] = [];
      const elements = Array.from(clonedArticle.children);
      
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        
        // Filter out empty or hidden elements
        if (element.offsetHeight === 0 || element.offsetWidth === 0) {
          continue;
        }
        
        const tag = element.tagName.toLowerCase();
        
        // If it's an H2, group it with the next element (if it's small like H3 or first para)
        if (tag === 'h2' && i + 1 < elements.length) {
          const nextElement = elements[i + 1] as HTMLElement;
          const nextTag = nextElement.tagName.toLowerCase();
          
          // Only group H2 with H3 or very short paragraphs
          if (nextTag === 'h3' || (nextTag === 'p' && nextElement.textContent && nextElement.textContent.length < 150)) {
            const groupContainer = document.createElement('div');
            groupContainer.appendChild(element.cloneNode(true));
            groupContainer.appendChild(nextElement.cloneNode(true));
            contentBlocks.push(groupContainer);
            i++; // Skip the next element since we just added it
            continue;
          }
        }
        
        // Otherwise, each element is its own block
        const blockContainer = document.createElement('div');
        blockContainer.appendChild(element.cloneNode(true));
        contentBlocks.push(blockContainer);
      }
      
      console.log(`Created ${contentBlocks.length} content blocks (individual elements for proper page breaks)`);
      
      // Create PDF
      const pdfDoc = await PDFDocument.create();
      
      // A4 dimensions in points
      const pageWidth = 595.28;
      const pageHeight = 841.89;
      const margin = 40;
      const maxHeightPerPage = pageHeight - (margin * 2);
      
      let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      let currentYPosition = margin;
      let pageNumber = 1;
      
      // Process each content block
      for (let i = 0; i < contentBlocks.length; i++) {
        const block = contentBlocks[i] as HTMLElement;
        
        // Create temporary container for just this block (minimal padding to avoid gaps)
        const blockContainer = document.createElement('div');
        blockContainer.style.position = 'absolute';
        blockContainer.style.left = '-9999px';
        blockContainer.style.top = '0';
        blockContainer.style.width = '210mm';
        blockContainer.style.backgroundColor = 'white';
        blockContainer.style.padding = '0';
        blockContainer.style.color = '#000';
        
        // Copy all stylesheets to ensure styling is preserved
        const styleSheets = Array.from(document.styleSheets);
        const styleElement = document.createElement('style');
        styleSheets.forEach(sheet => {
          try {
            const rules = Array.from(sheet.cssRules || []);
            rules.forEach(rule => {
              styleElement.textContent += rule.cssText + '\n';
            });
          } catch (e) {
            // Skip external stylesheets that can't be accessed
          }
        });
        blockContainer.appendChild(styleElement);
        
        const blockClone = block.cloneNode(true) as HTMLElement;
        blockContainer.appendChild(blockClone);
        document.body.appendChild(blockContainer);
        
        // Capture this block
        const blockCanvas = await html2canvas(blockContainer, {
          scale: 2,
          useCORS: true,
          allowTaint: false,
          backgroundColor: '#ffffff',
          logging: false,
          imageTimeout: 0,
        });
        
        document.body.removeChild(blockContainer);
        
        // Calculate dimensions
        const blockImgWidth = blockCanvas.width;
        const blockImgHeight = blockCanvas.height;
        
        const maxWidth = pageWidth - (margin * 2);
        const scale = maxWidth / blockImgWidth;
        const scaledBlockHeight = blockImgHeight * scale;
        
        console.log(`Block ${i + 1}: ${block.tagName}, height: ${scaledBlockHeight.toFixed(2)}pt`);
        
        // Check if block fits on current page
        const remainingSpace = pageHeight - currentYPosition - margin;
        
        // If block doesn't fit on current page, move it to next page (don't split paragraphs)
        if (scaledBlockHeight > remainingSpace && currentYPosition > margin + 50) {
          // Block doesn't fit, create new page
          console.log(`  Moving entire block to new page (remaining space: ${remainingSpace.toFixed(2)}pt)`);
          currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
          currentYPosition = margin;
          pageNumber++;
        }
        
        // Add block to current page (never split it)
        const blockImgData = blockCanvas.toDataURL('image/png');
        const blockPngImage = await pdfDoc.embedPng(blockImgData);
        
        const blockYPosition = pageHeight - currentYPosition - scaledBlockHeight;
        
        currentPage.drawImage(blockPngImage, {
          x: margin,
          y: blockYPosition,
          width: maxWidth,
          height: scaledBlockHeight,
        });
        
        currentYPosition += scaledBlockHeight;
      }
      
      // Remove temporary container
      document.body.removeChild(container);
      
      console.log(`PDF created with ${pageNumber} pages`);
      
      // Add links section if there are external links
      if (externalLinks.size > 0) {
        console.log('Adding links section...');
        
        // Embed fonts for the links section
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        
        const maxWidth = pageWidth - (margin * 2);
        const lineHeight = 14;
        const fontSize = 10;
        const h2FontSize = 18; // H2 size for External Links title
        
        // Check if we need a new page for links section
        const estimatedLinksHeight = (externalLinks.size * lineHeight * 2) + 100;
        if (currentYPosition + estimatedLinksHeight > pageHeight - margin) {
          currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
          currentYPosition = margin;
          pageNumber++;
        }
        
        // Add spacing before links section
        currentYPosition += 30;
        if (currentYPosition > pageHeight - margin - 100) {
          currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
          currentYPosition = margin;
          pageNumber++;
        }
        
        // Add "External Links" title (H2 style, no divider)
        currentPage.drawText('External Links', {
          x: margin,
          y: pageHeight - currentYPosition,
          size: h2FontSize,
          font: helveticaBoldFont,
          color: rgb(0.2, 0.2, 0.2),
        });
        
        currentYPosition += h2FontSize + 15;
        
        // Add each link
        for (const [url, linkText] of externalLinks) {
          // Check if we need a new page
          if (currentYPosition > pageHeight - margin - 50) {
            currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
            currentYPosition = margin;
            pageNumber++;
          }
          
          // Capitalize first letter of link text
          const capitalizedText = linkText.charAt(0).toUpperCase() + linkText.slice(1);
          
          // Draw bullet point and text
          const linkLabel = `• ${capitalizedText}`;
          currentPage.drawText(linkLabel, {
            x: margin,
            y: pageHeight - currentYPosition,
            size: fontSize,
            font: helveticaBoldFont,
            color: rgb(0, 0, 0),
          });
          
          currentYPosition += lineHeight;
          
          // Draw URL with word wrapping
          const words = url.split('/').join('/ ').split(' '); // Split on slashes for better wrapping
          let currentLine = '';
          
          for (const word of words) {
            const testLine = currentLine ? `${currentLine}${word}` : word;
            const textWidth = helveticaFont.widthOfTextAtSize(testLine, fontSize);
            
            if (textWidth > maxWidth - 20 && currentLine) {
              // Draw current line
              currentPage.drawText(currentLine, {
                x: margin + 10,
                y: pageHeight - currentYPosition,
                size: fontSize,
                font: helveticaFont,
                color: rgb(0.34, 0, 0.69), // Purple color matching theme #5700AF
              });
              
              currentYPosition += lineHeight;
              
              // Check if we need a new page
              if (currentYPosition > pageHeight - margin - 20) {
                currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
                currentYPosition = margin;
                pageNumber++;
              }
              
              currentLine = word;
            } else {
              currentLine = testLine;
            }
          }
          
          // Draw remaining URL text
          if (currentLine) {
            currentPage.drawText(currentLine, {
              x: margin + 10,
              y: pageHeight - currentYPosition,
              size: fontSize,
              font: helveticaFont,
              color: rgb(0.34, 0, 0.69), // Purple color matching theme #5700AF
            });
            
            currentYPosition += lineHeight;
          }
          
          currentYPosition += 10; // Add spacing between links
        }
        
        console.log(`Added ${externalLinks.size} links to the PDF`);
      }
      
      // Generate filename from title (use hyphens instead of spaces)
      const filename = pageTitle
        .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim() + '.pdf';
      
      // Save PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      
      URL.revokeObjectURL(url);
      
      console.log('PDF generated successfully!');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      // Restore cursor
      document.body.style.cursor = '';
      const cursorStyle = document.getElementById('pdf-generating-cursor');
      if (cursorStyle) {
        cursorStyle.remove();
      }
      setIsGenerating(false);
    }
  };

  const generatePDF = async () => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    setIsGenerating(true);

    try {
      console.log('Starting PDF generation...');
      
      // Get the main article content
      const article = document.querySelector('article[itemProp="articleBody"]') || 
                     document.querySelector('.theme-doc-markdown') ||
                     document.querySelector('main');
      
      if (!article) {
        console.error('Could not find article content');
        alert('Could not find article content to convert to PDF');
        return;
      }

      console.log('Found article content:', article);

      // Debug: Check for images on the page
      const allImages = article.querySelectorAll('img');
      console.log('Found', allImages.length, 'images in article');
      allImages.forEach((img, index) => {
        console.log(`Image ${index}:`, img.src, 'Alt:', img.alt, 'Complete:', img.complete, 'Natural size:', img.naturalWidth, 'x', img.naturalHeight);
      });

      // Function to clean unicode characters
      const cleanText = (text: string): string => {
        return text
          .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Remove emojis
          .replace(/[\u{2600}-\u{26FF}]/gu, '') // Remove miscellaneous symbols
          .replace(/[\u{2700}-\u{27BF}]/gu, '') // Remove dingbats
          .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Remove emoticons
          .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Remove transport symbols
          .replace(/[\u{2000}-\u{206F}]/gu, ' ') // Replace special spaces with regular spaces
          .replace(/\s+/g, ' ') // Replace multiple spaces with single space
          .trim();
      };

      // Get the page title and breadcrumb path
      const titleElement = document.querySelector('h1');
      let pageTitle = titleElement?.textContent || 'Syskit Point Documentation';
      pageTitle = cleanText(pageTitle);
      
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
        
        return readableSegments.join(' > '); // Use > instead of › to avoid unicode
      };
      
      const articlePath = generateArticlePath();

      // Enhanced content extraction maintaining structure and formatting
      interface ContentItem {
        type: 'heading' | 'paragraph' | 'list' | 'blockquote' | 'image' | 'admonition';
        text: string;
        level?: number; // for headings
        items?: string[]; // for lists
        src?: string; // for images
        isBold?: boolean;
        isItalic?: boolean;
        admonitionType?: string; // for admonitions
      }

      const extractStructuredContent = (element: Element): ContentItem[] => {
        const content: ContentItem[] = [];
        
        // Clone element and remove unwanted parts
        const cleanElement = element.cloneNode(true) as Element;
        
        // Remove PDF buttons and other unwanted elements
        const unwantedElements = cleanElement.querySelectorAll(
          '.pdf-download-button, .pdf-download-injected, .theme-doc-breadcrumbs, ' +
          '.pagination-nav, .theme-doc-footer, .theme-last-updated, nav, .navbar, ' +
          '.sidebar, .hash-link, .edit-page-link'
        );
        unwantedElements.forEach(el => el.remove());

        // Process all children in order to maintain structure
        const processElement = (el: Element) => {
          // Skip if already processed or unwanted
          if (el.matches('.pdf-download-button, .pdf-download-injected')) {
            return;
          }

          // Headings
          if (el.matches('h1, h2, h3, h4, h5, h6')) {
            const text = cleanText(el.textContent?.trim() || '');
            if (text) {
              content.push({
                type: 'heading',
                text: text,
                level: parseInt(el.tagName.charAt(1))
              });
            }
          }
          // Paragraphs
          else if (el.matches('p')) {
            const text = cleanText(el.textContent?.trim() || '');
            if (text) {
              // Check for bold/italic formatting
              const hasBold = el.querySelector('strong, b') !== null;
              const hasItalic = el.querySelector('em, i') !== null;
              
              content.push({
                type: 'paragraph',
                text: text,
                isBold: hasBold,
                isItalic: hasItalic
              });
            }
          }
          // Lists
          else if (el.matches('ul, ol')) {
            const listItems: string[] = [];
            const items = el.querySelectorAll('li');
            items.forEach(li => {
              const text = cleanText(li.textContent?.trim() || '');
              if (text) {
                listItems.push(text);
              }
            });
            
            if (listItems.length > 0) {
              content.push({
                type: 'list',
                text: '', // Not used for lists
                items: listItems
              });
            }
          }
          // Admonitions (Docusaurus info boxes)
          else if (el.matches('.theme-admonition, [class*="admonition"], .alert')) {
            // Get the main content, excluding the title/type
            const contentDiv = el.querySelector('.admonition-content, .theme-admonition-content') || el;
            let text = '';
            
            // Extract text without the admonition type title
            const titleElement = el.querySelector('.admonition-heading, .theme-admonition-heading, .admonition-title');
            if (titleElement) {
              // Get all text except the title
              const clonedEl = el.cloneNode(true) as Element;
              const clonedTitle = clonedEl.querySelector('.admonition-heading, .theme-admonition-heading, .admonition-title');
              if (clonedTitle) {
                clonedTitle.remove();
              }
              text = cleanText(clonedEl.textContent?.trim() || '');
            } else {
              // Fallback: try to remove common admonition type words from the beginning
              const fullText = cleanText(el.textContent?.trim() || '');
              text = fullText.replace(/^(note|tip|info|caution|danger|warning)[\s:!]*/i, '').trim();
            }
            
            if (text) {
              // Determine admonition type
              let admonitionType = 'info'; // default
              const classList = el.className.toLowerCase();
              
              if (classList.includes('note') || classList.includes('admonition-note')) {
                admonitionType = 'note';
              } else if (classList.includes('tip') || classList.includes('admonition-tip')) {
                admonitionType = 'tip';
              } else if (classList.includes('info') || classList.includes('admonition-info')) {
                admonitionType = 'info';
              } else if (classList.includes('caution') || classList.includes('admonition-caution')) {
                admonitionType = 'caution';
              } else if (classList.includes('danger') || classList.includes('admonition-danger')) {
                admonitionType = 'danger';
              } else if (classList.includes('warning') || classList.includes('admonition-warning')) {
                admonitionType = 'warning';
              }

              // Check for text formatting within the admonition
              const hasBold = el.querySelector('strong, b') !== null;
              const hasItalic = el.querySelector('em, i') !== null;
              
              content.push({
                type: 'admonition',
                text: text,
                admonitionType: admonitionType,
                isBold: hasBold,
                isItalic: hasItalic
              });
            }
          }
          // Blockquotes
          else if (el.matches('blockquote')) {
            const text = cleanText(el.textContent?.trim() || '');
            if (text) {
              content.push({
                type: 'blockquote',
                text: text
              });
            }
          }
          // Images
          else if (el.matches('img')) {
            const img = el as HTMLImageElement;
            const alt = cleanText(img.alt || '');
            let src = img.src;
            
            // Convert relative URLs to absolute URLs
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
              if (src.startsWith('/')) {
                src = window.location.origin + src;
              } else {
                src = window.location.origin + '/' + src;
              }
            }
            
            if (src) {
              content.push({
                type: 'image',
                text: alt || 'Image',
                src: src
              });
            }
          }
          // Process children for nested content
          else {
            Array.from(el.children).forEach(child => processElement(child));
          }
        };

        // Process all direct children of the main element
        Array.from(cleanElement.children).forEach(child => processElement(child));

        return content;
      };

      console.log('Extracting structured content...');
      const contentItems = extractStructuredContent(article);
      console.log('Extracted content items:', contentItems.length);
      
      // Debug: Log all content items
      contentItems.forEach((item, index) => {
        console.log(`Item ${index}:`, item.type, item.text ? item.text.substring(0, 50) : '', item.src || '');
      });
      
      if (contentItems.length === 0) {
        alert('No content found to convert to PDF');
        return;
      }

      // Create a new PDF document
      console.log('Creating PDF document...');
      const pdfDoc = await PDFDocument.create();
      
      // Embed fonts
      console.log('Embedding fonts...');
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      console.log('Fonts embedded successfully');
      
      // Page settings
      const pageWidth = 595.28; // A4 width in points
      const pageHeight = 841.89; // A4 height in points
      const margin = 50;
      const contentWidth = pageWidth - (2 * margin);
      const lineHeight = 14;
      const fontSize = 11;
      const headerFontSize = 16;
      
      let page = pdfDoc.addPage([pageWidth, pageHeight]);
      let currentY = pageHeight - margin;
      
      // Add header
      page.drawText(pageTitle, {
        x: margin,
        y: currentY,
        size: headerFontSize,
        font: helveticaBoldFont,
        color: rgb(0.34, 0, 0.69), // Purple color #5700AF
      });
      
      currentY -= lineHeight * 1.5;
      
      // Add breadcrumb path
      page.drawText(articlePath, {
        x: margin,
        y: currentY,
        size: fontSize - 1,
        font: helveticaFont,
        color: rgb(0.5, 0.5, 0.5), // Gray color
      });
      
      currentY -= lineHeight * 1.5;
      
      // Add source URL
      page.drawText('Generated from docs.syskit.com/point', {
        x: margin,
        y: currentY,
        size: fontSize - 2,
        font: helveticaFont,
        color: rgb(0.4, 0.4, 0.4), // Light gray color
      });
      
      currentY -= lineHeight * 2;
      
      // Add a separator line
      page.drawLine({
        start: { x: margin, y: currentY },
        end: { x: pageWidth - margin, y: currentY },
        thickness: 1,
        color: rgb(0.34, 0, 0.69), // Purple color
      });
      
      currentY -= lineHeight * 1.5;

      // Add structured content
      for (const item of contentItems) {
        // Check if we need a new page
        if (currentY < margin + lineHeight * 3) {
          page = pdfDoc.addPage([pageWidth, pageHeight]);
          currentY = pageHeight - margin;
        }
        
        switch (item.type) {
          case 'heading': {
            const headerSize = Math.max(fontSize + (7 - (item.level || 1) * 1.5), fontSize);
            currentY -= lineHeight * 0.8; // Extra space before header
            
            page.drawText(item.text, {
              x: margin,
              y: currentY,
              size: headerSize,
              font: helveticaBoldFont,
              color: rgb(0.2, 0.2, 0.2),
            });
            
            currentY -= lineHeight * 1.4;
            break;
          }
          
          case 'paragraph': {
            const font = item.isBold ? helveticaBoldFont : helveticaFont;
            const words = item.text.split(' ');
            let currentLine = '';
            
            for (const word of words) {
              const testLine = currentLine ? `${currentLine} ${word}` : word;
              const textWidth = font.widthOfTextAtSize(testLine, fontSize);
              
              if (textWidth > contentWidth && currentLine) {
                // Draw current line
                page.drawText(currentLine, {
                  x: margin,
                  y: currentY,
                  size: fontSize,
                  font: font,
                  color: rgb(0, 0, 0),
                });
                
                currentY -= lineHeight;
                
                // Check if we need a new page
                if (currentY < margin + lineHeight) {
                  page = pdfDoc.addPage([pageWidth, pageHeight]);
                  currentY = pageHeight - margin;
                }
                
                currentLine = word;
              } else {
                currentLine = testLine;
              }
            }
            
            // Draw remaining text
            if (currentLine) {
              page.drawText(currentLine, {
                x: margin,
                y: currentY,
                size: fontSize,
                font: font,
                color: rgb(0, 0, 0),
              });
              
              currentY -= lineHeight * 1.5; // Extra spacing after paragraph
            }
            break;
          }
          
          case 'list': {
            if (item.items) {
              for (const listItem of item.items) {
                // Check if we need a new page
                if (currentY < margin + lineHeight) {
                  page = pdfDoc.addPage([pageWidth, pageHeight]);
                  currentY = pageHeight - margin;
                }
                
                const bulletText = `• ${listItem}`;
                const words = bulletText.split(' ');
                let currentLine = '';
                
                for (const word of words) {
                  const testLine = currentLine ? `${currentLine} ${word}` : word;
                  const textWidth = helveticaFont.widthOfTextAtSize(testLine, fontSize);
                  
                  if (textWidth > contentWidth - 20 && currentLine) { // Indent for lists
                    page.drawText(currentLine, {
                      x: margin + 15, // Indent list items
                      y: currentY,
                      size: fontSize,
                      font: helveticaFont,
                      color: rgb(0, 0, 0),
                    });
                    
                    currentY -= lineHeight;
                    
                    if (currentY < margin + lineHeight) {
                      page = pdfDoc.addPage([pageWidth, pageHeight]);
                      currentY = pageHeight - margin;
                    }
                    
                    currentLine = '  ' + word; // Indent continuation lines
                  } else {
                    currentLine = testLine;
                  }
                }
                
                if (currentLine) {
                  page.drawText(currentLine, {
                    x: margin + 15,
                    y: currentY,
                    size: fontSize,
                    font: helveticaFont,
                    color: rgb(0, 0, 0),
                  });
                  
                  currentY -= lineHeight;
                }
              }
              currentY -= lineHeight * 0.5; // Extra spacing after list
            }
            break;
          }
          
          case 'admonition': {
            // Get background colors based on admonition type (no borders)
            const getAdmonitionColors = (type: string) => {
              switch (type) {
                case 'note':
                  return { bg: rgb(0.85, 0.92, 1), text: rgb(0.1, 0.2, 0.4) };
                case 'tip':
                  return { bg: rgb(0.85, 0.95, 0.85), text: rgb(0.1, 0.3, 0.1) };
                case 'info':
                  return { bg: rgb(0.9, 0.95, 1), text: rgb(0.2, 0.3, 0.5) };
                case 'caution':
                case 'warning':
                  return { bg: rgb(1, 0.95, 0.8), text: rgb(0.4, 0.3, 0) };
                case 'danger':
                  return { bg: rgb(1, 0.9, 0.9), text: rgb(0.4, 0.1, 0.1) };
                default:
                  return { bg: rgb(0.95, 0.95, 0.95), text: rgb(0.2, 0.2, 0.2) };
              }
            };

            const colors = getAdmonitionColors(item.admonitionType || 'info');
            const admonitionPadding = 12;
            
            // Determine font based on text styling
            let admonitionFont = helveticaFont;
            if (item.isBold && item.isItalic) {
              // pdf-lib doesn't have bold-italic, use bold as priority
              admonitionFont = helveticaBoldFont;
            } else if (item.isBold) {
              admonitionFont = helveticaBoldFont;
            } else if (item.isItalic) {
              // pdf-lib doesn't have italic helvetica, use regular
              admonitionFont = helveticaFont;
            }
            
            // Calculate text dimensions for background box
            const words = item.text.split(' ');
            const lines: string[] = [];
            let currentLine = '';
            
            // Calculate wrapped lines first
            for (const word of words) {
              const testLine = currentLine ? `${currentLine} ${word}` : word;
              const textWidth = admonitionFont.widthOfTextAtSize(testLine, fontSize);
              
              if (textWidth > contentWidth - (admonitionPadding * 2) && currentLine) {
                lines.push(currentLine);
                currentLine = word;
              } else {
                currentLine = testLine;
              }
            }
            if (currentLine) {
              lines.push(currentLine);
            }

            const boxHeight = (lines.length * lineHeight) + (admonitionPadding * 2);
            
            // Check if we need a new page
            if (currentY - boxHeight < margin) {
              page = pdfDoc.addPage([pageWidth, pageHeight]);
              currentY = pageHeight - margin;
            }

            // Draw background rectangle (no border)
            page.drawRectangle({
              x: margin,
              y: currentY - boxHeight + admonitionPadding,
              width: contentWidth,
              height: boxHeight,
              color: colors.bg,
            });

            // Draw text lines with proper styling
            let textY = currentY - admonitionPadding;
            for (const line of lines) {
              page.drawText(line, {
                x: margin + admonitionPadding,
                y: textY,
                size: fontSize,
                font: admonitionFont,
                color: colors.text,
              });
              textY -= lineHeight;
            }

            currentY -= boxHeight + lineHeight;
            break;
          }

          case 'blockquote': {
            const words = item.text.split(' ');
            let currentLine = '';
            
            for (const word of words) {
              const testLine = currentLine ? `${currentLine} ${word}` : word;
              const textWidth = helveticaFont.widthOfTextAtSize(testLine, fontSize - 1);
              
              if (textWidth > contentWidth - 30 && currentLine) {
                page.drawText(currentLine, {
                  x: margin + 20, // Indent blockquotes
                  y: currentY,
                  size: fontSize - 1,
                  font: helveticaFont,
                  color: rgb(0.3, 0.3, 0.3),
                });
                
                currentY -= lineHeight;
                
                if (currentY < margin + lineHeight) {
                  page = pdfDoc.addPage([pageWidth, pageHeight]);
                  currentY = pageHeight - margin;
                }
                
                currentLine = word;
              } else {
                currentLine = testLine;
              }
            }
            
            if (currentLine) {
              page.drawText(currentLine, {
                x: margin + 20,
                y: currentY,
                size: fontSize - 1,
                font: helveticaFont,
                color: rgb(0.3, 0.3, 0.3),
              });
              
              currentY -= lineHeight * 1.5;
            }
            break;
          }
          
          case 'image': {
            console.log('Processing image item:', { src: item.src, text: item.text });
            
            try {
              if (item.src) {
                // First, try to find the actual image element on the page that's already loaded
                const existingImg = document.querySelector(`img[src="${item.src}"]`) as HTMLImageElement;
                
                if (existingImg && existingImg.complete && existingImg.naturalWidth > 0) {
                  console.log('Found existing loaded image element');
                  
                  try {
                    // Create canvas and draw the existing image
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    if (ctx) {
                      canvas.width = existingImg.naturalWidth;
                      canvas.height = existingImg.naturalHeight;
                      
                      // Draw the image from the existing element
                      ctx.drawImage(existingImg, 0, 0);
                      
                      // Convert to PNG data URL
                      const dataURL = canvas.toDataURL('image/png');
                      console.log('Canvas conversion successful');
                      
                      // Convert data URL to bytes
                      const base64Data = dataURL.split(',')[1];
                      const imageBytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
                      
                      // Embed the image
                      const embeddedImage = await pdfDoc.embedPng(imageBytes);
                      
                      if (embeddedImage) {
                        console.log('Image embedded successfully, dimensions:', embeddedImage.width, 'x', embeddedImage.height);
                        
                        // Calculate scaling
                        const imageWidth = embeddedImage.width;
                        const imageHeight = embeddedImage.height;
                        const maxWidth = contentWidth - 40;
                        const maxHeight = 300;
                        
                        let scaledWidth = imageWidth;
                        let scaledHeight = imageHeight;
                        
                        if (scaledWidth > maxWidth) {
                          const ratio = maxWidth / scaledWidth;
                          scaledWidth = maxWidth;
                          scaledHeight = scaledHeight * ratio;
                        }
                        
                        if (scaledHeight > maxHeight) {
                          const ratio = maxHeight / scaledHeight;
                          scaledHeight = maxHeight;
                          scaledWidth = scaledWidth * ratio;
                        }
                        
                        // Check for page break
                        if (currentY - scaledHeight < margin + lineHeight) {
                          page = pdfDoc.addPage([pageWidth, pageHeight]);
                          currentY = pageHeight - margin;
                        }
                        
                        // Center the image
                        const imageX = margin + (contentWidth - scaledWidth) / 2;
                        
                        // Draw the image
                        page.drawImage(embeddedImage, {
                          x: imageX,
                          y: currentY - scaledHeight,
                          width: scaledWidth,
                          height: scaledHeight,
                        });
                        
                        console.log('Image drawn at position:', imageX, currentY - scaledHeight);
                        
                        currentY -= scaledHeight + lineHeight;
                        
                        // Add caption
                        if (item.text && item.text !== 'Image') {
                          page.drawText(item.text, {
                            x: margin,
                            y: currentY,
                            size: fontSize - 2,
                            font: helveticaFont,
                            color: rgb(0.4, 0.4, 0.4),
                          });
                          currentY -= lineHeight;
                        }
                        
                        currentY -= lineHeight;
                        break; // Successfully processed image
                      }
                    }
                  } catch (canvasError) {
                    console.error('Canvas processing error:', canvasError);
                  }
                } else {
                  console.log('Existing image not found or not loaded, trying new image load');
                  
                  // Fallback: try loading a new image
                  try {
                    const img = new Image();
                    
                    const imageLoadPromise = new Promise<HTMLImageElement>((resolve, reject) => {
                      img.onload = () => {
                        console.log('New image loaded successfully');
                        resolve(img);
                      };
                      img.onerror = (e) => {
                        console.error('Image load error:', e);
                        reject(new Error('Failed to load image'));
                      };
                      
                      // Try without crossOrigin first for same-origin images
                      if (item.src.startsWith(window.location.origin) || item.src.startsWith('/') || item.src.startsWith('./')) {
                        console.log('Loading same-origin image without CORS');
                        img.src = item.src;
                      } else {
                        console.log('Loading cross-origin image with CORS');
                        img.crossOrigin = 'anonymous';
                        img.src = item.src;
                      }
                    });
                    
                    const loadedImg = await imageLoadPromise;
                    
                    // Process the loaded image
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    if (ctx) {
                      canvas.width = loadedImg.naturalWidth;
                      canvas.height = loadedImg.naturalHeight;
                      ctx.drawImage(loadedImg, 0, 0);
                      
                      const dataURL = canvas.toDataURL('image/png');
                      const base64Data = dataURL.split(',')[1];
                      const imageBytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
                      
                      const embeddedImage = await pdfDoc.embedPng(imageBytes);
                      
                      if (embeddedImage) {
                        // Same scaling and drawing logic as above
                        const imageWidth = embeddedImage.width;
                        const imageHeight = embeddedImage.height;
                        const maxWidth = contentWidth - 40;
                        const maxHeight = 300;
                        
                        let scaledWidth = imageWidth;
                        let scaledHeight = imageHeight;
                        
                        if (scaledWidth > maxWidth) {
                          const ratio = maxWidth / scaledWidth;
                          scaledWidth = maxWidth;
                          scaledHeight = scaledHeight * ratio;
                        }
                        
                        if (scaledHeight > maxHeight) {
                          const ratio = maxHeight / scaledHeight;
                          scaledHeight = maxHeight;
                          scaledWidth = scaledWidth * ratio;
                        }
                        
                        if (currentY - scaledHeight < margin + lineHeight) {
                          page = pdfDoc.addPage([pageWidth, pageHeight]);
                          currentY = pageHeight - margin;
                        }
                        
                        const imageX = margin + (contentWidth - scaledWidth) / 2;
                        
                        page.drawImage(embeddedImage, {
                          x: imageX,
                          y: currentY - scaledHeight,
                          width: scaledWidth,
                          height: scaledHeight,
                        });
                        
                        currentY -= scaledHeight + lineHeight;
                        
                        if (item.text && item.text !== 'Image') {
                          page.drawText(item.text, {
                            x: margin,
                            y: currentY,
                            size: fontSize - 2,
                            font: helveticaFont,
                            color: rgb(0.4, 0.4, 0.4),
                          });
                          currentY -= lineHeight;
                        }
                        
                        currentY -= lineHeight;
                        break; // Successfully processed image
                      }
                    }
                  } catch (loadError) {
                    console.error('Image loading failed:', loadError);
                  }
                }
              }
              
              // If we get here, image processing failed - show enhanced placeholder
              console.log('Showing enhanced placeholder for image:', item.text);
              
              // Draw a box to represent where the image would be
              const placeholderHeight = 60;
              const placeholderWidth = Math.min(200, contentWidth - 40);
              
              if (currentY - placeholderHeight < margin + lineHeight) {
                page = pdfDoc.addPage([pageWidth, pageHeight]);
                currentY = pageHeight - margin;
              }
              
              // Draw placeholder box
              page.drawRectangle({
                x: margin + (contentWidth - placeholderWidth) / 2,
                y: currentY - placeholderHeight,
                width: placeholderWidth,
                height: placeholderHeight,
                borderColor: rgb(0.7, 0.4, 0.4),
                borderWidth: 1,
                color: rgb(0.95, 0.9, 0.9),
              });
              
              // Draw placeholder text
              page.drawText(`[Image: ${item.text}]`, {
                x: margin + (contentWidth - placeholderWidth) / 2 + 10,
                y: currentY - placeholderHeight / 2,
                size: fontSize - 1,
                font: helveticaFont,
                color: rgb(0.7, 0.4, 0.4),
              });
              
              if (item.src) {
                page.drawText(`Source: ${item.src.substring(0, 30)}...`, {
                  x: margin + (contentWidth - placeholderWidth) / 2 + 10,
                  y: currentY - placeholderHeight / 2 - lineHeight,
                  size: fontSize - 3,
                  font: helveticaFont,
                  color: rgb(0.5, 0.5, 0.5),
                });
              }
              
              currentY -= placeholderHeight + lineHeight;
              
            } catch (error) {
              console.error('Unexpected image processing error:', error);
              
              // Final fallback
              page.drawText(`[Image Error: ${item.text}]`, {
                x: margin,
                y: currentY,
                size: fontSize - 1,
                font: helveticaFont,
                color: rgb(0.8, 0.2, 0.2),
              });
              
              currentY -= lineHeight * 2;
            }
            break;
          }
        }
      }

      // Generate filename from title
      const cleanedTitle = cleanText(pageTitle);
      const filename = cleanedTitle
        .replace(/[^a-z0-9]/gi, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '')
        .toLowerCase()
        .replace(/pdf$/, '') // Remove 'pdf' at the end if present
        + '.pdf';

      // Serialize and download
      console.log('Generating PDF bytes...');
      const pdfBytes = await pdfDoc.save();
      console.log('PDF bytes generated, length:', pdfBytes.length);
      
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      className="pdf-download-button"
      onClick={generatePDFFromHTML}
      disabled={isGenerating}
      title="Download this page as PDF"
      type="button"
    >
      <span className="pdf-icon">📄</span>
      <span className="pdf-text">{isGenerating ? 'Generating...' : 'PDF'}</span>
    </button>
  );
};

export default PDFDownload;