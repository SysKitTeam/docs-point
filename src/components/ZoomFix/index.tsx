import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function ZoomFix(): null {
  const location = useLocation();
  
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    // Fix zoom overlay z-index issues
    const fixZoomOverlay = () => {
      // Find all medium-zoom overlays and images
      const overlays = document.querySelectorAll('.medium-zoom-overlay');
      const zoomedImages = document.querySelectorAll('.medium-zoom-image');
      
      overlays.forEach((overlay: HTMLElement) => {
        overlay.style.zIndex = '999';
      });
      
      zoomedImages.forEach((img: HTMLElement) => {
        img.style.zIndex = '1000';
      });
    };

    // Run immediately and after delays to catch all zoom instances
    fixZoomOverlay();
    const timer1 = setTimeout(fixZoomOverlay, 100);
    const timer2 = setTimeout(fixZoomOverlay, 500);
    const timer3 = setTimeout(fixZoomOverlay, 1000);

    // Also fix on any image click
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        setTimeout(fixZoomOverlay, 50);
      }
    };
    
    document.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      document.removeEventListener('click', handleClick);
    };
  }, [location.pathname]);

  return null;
}
