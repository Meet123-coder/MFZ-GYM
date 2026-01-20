// Performance Optimization Module
// Lazy loading images for better performance under heavy load

(function() {
  'use strict';

  // Lazy Load Images
  const lazyLoadImages = () => {
    const imageElements = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });

      imageElements.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      imageElements.forEach(img => {
        img.src = img.dataset.src;
      });
    }
  };

  // Debounce scroll and resize events
  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Optimize scroll animations
  const optimizeScrollAnimations = () => {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Animations handled by CSS with will-change
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  };

  // Reduce animation on low-end devices
  const detectLowEndDevice = () => {
    const cores = navigator.hardwareConcurrency || 1;
    const memory = navigator.deviceMemory || 4;
    
    if (cores <= 2 || memory <= 2) {
      document.documentElement.classList.add('low-end-device');
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      lazyLoadImages();
      optimizeScrollAnimations();
      detectLowEndDevice();
    });
  } else {
    lazyLoadImages();
    optimizeScrollAnimations();
    detectLowEndDevice();
  }

  // Prefetch critical resources
  const prefetchResources = () => {
    const criticalAssets = [
      'assets/css/styles.css',
      'assets/js/scrollreveal.min.js'
    ];

    criticalAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = asset;
      document.head.appendChild(link);
    });
  };

  prefetchResources();
})();
