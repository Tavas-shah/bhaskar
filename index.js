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

setInterval(updateText, 5000);
