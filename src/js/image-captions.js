// Add image captions automatically for images with alt text
// Only run in browser environment
if (typeof window !== 'undefined') {
  
  function addImageCaptions() {
    // Find all images in markdown content that have alt text
    const images = document.querySelectorAll('.markdown img[alt]:not([alt=""])');
    
    images.forEach(function(img) {
      // Skip if already has a caption wrapper
      if (img.parentElement.classList.contains('image-with-caption')) {
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
        img.parentNode.insertBefore(wrapper, img);
        
        // Move image into wrapper
        wrapper.appendChild(img);
        
        // Add caption after image
        wrapper.appendChild(caption);
      }
    });
  }
  
  // Run on initial load
  document.addEventListener('DOMContentLoaded', addImageCaptions);
  
  // Run after navigation changes (for SPA behavior)
  if (window.location) {
    let currentPath = window.location.pathname;
    const checkForNavigation = function() {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        // Wait a moment for content to load
        setTimeout(addImageCaptions, 100);
      }
    };
    
    // Check for navigation changes
    setInterval(checkForNavigation, 500);
  }
  
  // Also run when images load (in case of lazy loading)
  setTimeout(addImageCaptions, 1000);
  setTimeout(addImageCaptions, 3000);
}