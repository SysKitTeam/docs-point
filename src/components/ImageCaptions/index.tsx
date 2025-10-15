import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function ImageCaptions(): null {
  const location = useLocation();
  
  useEffect(() => {
    const addImageCaptions = () => {
      // Find all images in markdown content that have alt text
      const images = document.querySelectorAll('.markdown img[alt]:not([alt=""])');
      
      images.forEach((img: HTMLImageElement) => {
        // Skip if already has a caption wrapper
        if (img.parentElement?.classList.contains('image-with-caption')) {
          return;
        }
        
        // Skip if image is inside a card container, tile, or table
        const isInCard = img.closest('.cardContainer_S8oU') || 
                        img.closest('.docCardListItem_W1sv') ||
                        img.closest('[class*="tile"]') ||
                        img.closest('[class*="Tile"]') ||
                        img.closest('article[class*="card"]') ||
                        img.closest('article[class*="Card"]') ||
                        img.closest('ul[class*="card"]') ||
                        img.closest('ul[class*="Card"]') ||
                        img.closest('li[class*="card"]') ||
                        img.closest('li[class*="Card"]') ||
                        img.closest('table');
        
        if (isInCard) {
          return;
        }
        
        const altText = img.getAttribute('alt');
        if (altText && altText.trim()) {
          // Create wrapper div
          const wrapper = document.createElement('div');
          wrapper.className = 'image-with-caption';
          
          // Create caption div
          const caption = document.createElement('div');
          caption.className = 'caption';
          caption.textContent = altText;
          
          // Insert wrapper before image
          img.parentNode?.insertBefore(wrapper, img);
          
          // Move image into wrapper
          wrapper.appendChild(img);
          
          // Add caption after image
          wrapper.appendChild(caption);
        }
      });
    };

    // Wait for the page content to be fully rendered
    const waitForContent = () => {
      const markdownContent = document.querySelector('.markdown');
      if (markdownContent) {
        addImageCaptions();
      } else {
        // If markdown content not found, try again after a short delay
        setTimeout(waitForContent, 100);
      }
    };

    // Use multiple strategies to ensure captions are added
    // 1. Run immediately
    waitForContent();
    
    // 2. Run after short delays
    setTimeout(waitForContent, 200);
    setTimeout(waitForContent, 500);
    setTimeout(waitForContent, 1000);
    
    // 3. Set up mutation observer to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Check if new images were added
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'IMG' || element.querySelector('img')) {
                shouldUpdate = true;
              }
            }
          });
        }
      });
      
      if (shouldUpdate) {
        setTimeout(addImageCaptions, 100);
      }
    });
    
    // Start observing
    const markdownContent = document.querySelector('.markdown');
    if (markdownContent) {
      observer.observe(markdownContent, {
        childList: true,
        subtree: true
      });
    }
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run when route changes

  return null;
}