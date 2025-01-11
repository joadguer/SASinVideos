// Image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Performance metrics
const performanceMetrics = {
    logPageLoadTime: () => {
        window.addEventListener('load', () => {
            const timing = window.performance.timing;
            const pageLoad = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page Load Time: ${pageLoad}ms`);
        });
    },
    
    logFirstContentfulPaint: () => {
        const paint = performance.getEntriesByType('paint');
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
            console.log(`First Contentful Paint: ${fcp.startTime}ms`);
        }
    }
};

// Initialize performance monitoring
performanceMetrics.logPageLoadTime();
performanceMetrics.logFirstContentfulPaint();
