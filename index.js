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

    // Create initial slides
    function createSlides() {
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url('${image}')`;
            if (index === currentImage) slide.classList.add('active');
            if (index === getPreviousIndex()) slide.classList.add('previous');
            if (index === getNextIndex()) slide.classList.add('next');
            slideContainer.appendChild(slide);
        });
    }

    function getPreviousIndex() {
        return currentImage === 0 ? images.length - 1 : currentImage - 1;
    }

    function getNextIndex() {
        return currentImage === images.length - 1 ? 0 : currentImage + 1;
    }

    function updateSlides(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const slides = document.querySelectorAll('.slide');
        const previousIndex = getPreviousIndex();
        const nextIndex = getNextIndex();

        // Remove all classes first
        slides.forEach(slide => {
            slide.classList.remove('active', 'previous', 'next');
        });

        if (direction === 'next') {
            currentImage = nextIndex;
        } else {
            currentImage = previousIndex;
        }

        // Apply new classes
        slides.forEach((slide, index) => {
            if (index === currentImage) {
                slide.classList.add('active');
            } else if (index === getPreviousIndex()) {
                slide.classList.add('previous');
            } else if (index === getNextIndex()) {
                slide.classList.add('next');
            }
        });

        setTimeout(() => {
            isAnimating = false;
        }, 1500); // Match this with CSS transition duration
    }

    // Initialize slides
    createSlides();

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        updateSlides('prev');
    });

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        updateSlides('next');
    });

    // Auto-change every 5 seconds
    let autoplayInterval = setInterval(() => {
        updateSlides('next');
    }, 5000);

    // Pause autoplay on hover
    hero.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    // Resume autoplay when mouse leaves
    hero.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            updateSlides('next');
        }, 5000);
    });
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




