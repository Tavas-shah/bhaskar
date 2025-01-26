// Loading animation


// Navbar scroll handling
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

// Math symbols animation
const mathSymbols = ['∑', '∫', 'π', '∞', '√', '∂', 'θ', 'α', 'β', 'Δ', 'λ', 'μ'];
const container = document.getElementById('math-symbols-container');

function createMathSymbol() {
    const symbol = document.createElement('div');
    symbol.className = 'math-symbol';
    symbol.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
    
    // Random horizontal position
    symbol.style.left = Math.random() * 100 + '%';
    
    container.appendChild(symbol);

    // Remove the symbol after animation completes
    symbol.addEventListener('animationend', () => {
        symbol.remove();
    });
}

// Create new symbols periodically
setInterval(createMathSymbol, 2000);

// Create initial set of symbols
for (let i = 0; i < 5; i++) {
    setTimeout(createMathSymbol, i * 500);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Interactive hover effects for contact items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-5px) rotate(1deg)';
    });
    
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0) rotate(0)';
    });
});
