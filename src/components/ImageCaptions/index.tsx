import { useEffect } from 'react';

export default function ImageCaptions(): null {
  useEffect(() => {
    const addImageCaptions = () => {
      // Find all images in markdown content that have alt text
      const images = document.querySelectorAll('.markdown img[alt]:not([alt=""])');
      
      images.forEach((img: HTMLImageElement) => {
        // Skip if already has a caption wrapper
        if (img.parentElement?.classList.contains('image-with-caption')) {
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

    // Run immediately
    addImageCaptions();
    
    // Run after a short delay to catch any dynamically loaded content
    setTimeout(addImageCaptions, 100);
    setTimeout(addImageCaptions, 500);
    
    // Set up intersection observer to handle lazy-loaded images
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(addImageCaptions, 50);
        }
      });
    });
    
    // Observe all images
    const allImages = document.querySelectorAll('.markdown img');
    allImages.forEach((img) => observer.observe(img));
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}