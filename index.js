document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animation on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Dynamic margin adjustment for the container based on header height
    function adjustContainerMargin() {
        const container = document.querySelector('.container');
        const header = document.querySelector('.header');
        const headerHeight = header.offsetHeight;
        
        container.style.marginTop = `${headerHeight}px`;
    }

    // Adjust margin on load, resize, and scroll
    window.addEventListener('load', adjustContainerMargin);
    window.addEventListener('resize', adjustContainerMargin);
    window.addEventListener('scroll', adjustContainerMargin);

    // Image slider functionality
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
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    mobileMenuBtn?.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        if (window.innerWidth <= 768) {
            dropdown.addEventListener('click', function(e) {
                this.classList.toggle('active');
                e.stopPropagation();
            });
        }
    });
});
