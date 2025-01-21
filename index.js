// Initialize AOS (Animation on Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Create slide container
    const slideContainer = document.createElement('div');
    slideContainer.className = 'slide-container';
    hero.appendChild(slideContainer);
    
    // Array of image paths
    const images = ['4.png', '5.png'];
    let currentImage = 0;
    let isAnimating = false;
    let touchStartX = 0;
    let touchEndX = 0;
    let autoplayInterval;

    // Create slides and dots
    function createSlides() {
        // Create slides
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url('${image}')`;
            if (index === currentImage) slide.classList.add('active');
            slideContainer.appendChild(slide);
        });

        // Create dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === currentImage ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        hero.appendChild(dotsContainer);
    }

    function goToSlide(index) {
        if (isAnimating || index === currentImage) return;
        isAnimating = true;

        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const direction = index > currentImage ? 1 : -1;

        // Update slides
        slides[currentImage].classList.remove('active');
        slides[index].style.transform = `translateX(${direction * 100}%)`;
        slides[index].classList.add('active');

        // Update dots
        dots[currentImage].classList.remove('active');
        dots[index].classList.add('active');

        currentImage = index;

        setTimeout(() => {
            isAnimating = false;
        }, 1200);
    }

    function nextSlide() {
        const nextIndex = (currentImage + 1) % images.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = currentImage === 0 ? images.length - 1 : currentImage - 1;
        goToSlide(prevIndex);
    }

    // Touch handlers
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        clearInterval(autoplayInterval);
    }

    function handleTouchMove(e) {
        if (isAnimating) return;
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const touchDiff = touchStartX - touchEndX;
        const minSwipeDistance = 50; // Minimum distance for swipe

        if (Math.abs(touchDiff) > minSwipeDistance) {
            if (touchDiff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        // Reset touch coordinates
        touchStartX = 0;
        touchEndX = 0;

        // Restart autoplay
        startAutoplay();
    }

    // Initialize autoplay
    function startAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    // Initialize slides
    createSlides();

    // Event listeners
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
    });

    // Touch events
    hero.addEventListener('touchstart', handleTouchStart, { passive: true });
    hero.addEventListener('touchmove', handleTouchMove, { passive: true });
    hero.addEventListener('touchend', handleTouchEnd);

    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoplayInterval);
        } else {
            startAutoplay();
        }
    });

    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Update any necessary dimensions
            const slides = document.querySelectorAll('.slide');
            slides.forEach(slide => {
                slide.style.height = `${hero.offsetHeight}px`;
            });
        }, 250);
    });

    // Start autoplay
    startAutoplay();

    // Pause autoplay on hover (desktop only)
    const isTouchDevice = 'ontouchstart' in window;
    if (!isTouchDevice) {
        hero.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        hero.addEventListener('mouseleave', startAutoplay);
    }
});
// Rotating text animation
const texts = ["Indian Mathematics", "Bhaskar Prabha Foundation"];
let index = 0;
const textElement = document.getElementById('rotating-text');

const updateText = () => {
    textElement.style.opacity = '0';
    textElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
        textElement.style.opacity = '1';
        textElement.style.transform = 'translateY(0)';
    }, 500);
};




