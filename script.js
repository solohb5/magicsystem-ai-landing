// Track when page actually loads
let pageLoadTime = Date.now();

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const loadingOverlay = document.getElementById('loadingOverlay');
    const mainContent = document.getElementById('mainContent');
    const loadingWords = document.querySelectorAll('.loading-word');
    
    // Calculate how long page actually took to load
    let loadTime = Date.now() - pageLoadTime;
    
    // Function to show main content
    function showMainContent() {
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            loadingOverlay.style.visibility = 'hidden';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
        
        if (mainContent) {
            mainContent.style.opacity = '1';
        }
    }
    
    // If page loaded fast (under 500ms), show immediately with brief animation
    if (loadTime < 500) {
        // Quick animation - just show the final state
        loadingWords.forEach((word) => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
            word.style.transition = 'all 0.3s ease-out';
        });
        
        // Show content after brief moment
        setTimeout(showMainContent, 800);
    } else {
        // Page took time to load, show full animation
        loadingWords.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
                word.style.transition = 'all 0.6s ease-out';
            }, index * 200);
        });
        
        // Show content after animation
        setTimeout(showMainContent, 1400);
    }
    
    // Emergency fallback - always show after 2 seconds max
    setTimeout(() => {
        if (loadingOverlay && loadingOverlay.style.display !== 'none') {
            loadingOverlay.style.display = 'none';
            if (mainContent) mainContent.style.opacity = '1';
        }
    }, 2000);
    
    // Smooth arrow fade on scroll
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    if (scrollArrow) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const fadeStart = 50;
            const fadeEnd = 200;
            
            if (scrollY <= fadeStart) {
                // Fully visible
                scrollArrow.style.opacity = '1';
                scrollArrow.style.transform = 'translateX(-50%) translateY(0px)';
            } else if (scrollY >= fadeEnd) {
                // Fully hidden
                scrollArrow.style.opacity = '0';
                scrollArrow.style.transform = 'translateX(-50%) translateY(20px)';
            } else {
                // Fade and move
                const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
                const opacity = 1 - fadeProgress;
                const translateY = fadeProgress * 20;
                
                scrollArrow.style.opacity = opacity;
                scrollArrow.style.transform = `translateX(-50%) translateY(${translateY}px)`;
            }
        });
    }
});