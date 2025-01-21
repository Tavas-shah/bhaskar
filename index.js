document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animation on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Header scroll effect
   window.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    
    container.style.marginTop = `${headerHeight}px`;
});

    const images = [
        '4.png',
        '5.png',
        '/api/placeholder/400/500'
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById('currentImage');

    function changeImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        imageElement.src = images[currentIndex];
    }

    document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
    document.querySelector('.next').addEventListener('click', () => changeImage(1));

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

    setInterval(updateText, 3000); // Change text every 3 seconds
});
