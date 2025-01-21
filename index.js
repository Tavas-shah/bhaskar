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

    // Initialize slides
    createSlides();

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-change every 5 seconds
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pause autoplay on hover
    hero.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    // Resume autoplay when mouse leaves
    hero.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
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




