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
            
            // Array of image paths
            const images = ['4.png', '5.png'];
            let currentImage = 0;

            // Initialize first image
            hero.style.backgroundImage = `url('${images[currentImage]}')`;

            // Previous button click handler
            prevBtn.addEventListener('click', () => {
                currentImage--;
                if (currentImage < 0) {
                    currentImage = images.length - 1;
                }
                hero.style.backgroundImage = `url('${images[currentImage]}')`;
            });

            // Next button click handler
            nextBtn.addEventListener('click', () => {
                currentImage++;
                if (currentImage >= images.length) {
                    currentImage = 0;
                }
                hero.style.backgroundImage = `url('${images[currentImage]}')`;
            });

            // Optional: Auto-change every 5 seconds
            setInterval(() => {
                currentImage++;
                if (currentImage >= images.length) {
                    currentImage = 0;
                }
                hero.style.backgroundImage = `url('${images[currentImage]}')`;
            }, 5000);
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




