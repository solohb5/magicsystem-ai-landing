document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const loadingOverlay = document.getElementById('loadingOverlay');
    const mainContent = document.getElementById('mainContent');
    const loadingWords = document.querySelectorAll('.loading-word');
    
    // Function to show main content
    function showMainContent() {
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            loadingOverlay.style.visibility = 'hidden';
            // Remove from DOM after fade
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 800);
        }
        
        if (mainContent) {
            mainContent.style.opacity = '1';
        }
    }
    
    // Start word reveal animation
    if (loadingWords.length > 0) {
        loadingWords.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
                word.style.transition = 'all 0.6s ease-out';
            }, index * 300);
        });
    }
    
    // Show main content after animation completes
    setTimeout(showMainContent, 2000);
    
    // Absolute fallback - force show after 4 seconds no matter what
    setTimeout(() => {
        if (loadingOverlay) loadingOverlay.style.display = 'none';
        if (mainContent) mainContent.style.opacity = '1';
    }, 4000);
    
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