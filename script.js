document.addEventListener('DOMContentLoaded', function() {
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