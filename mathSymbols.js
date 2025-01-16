
    document.addEventListener('DOMContentLoaded', () => {
        const loader = document.querySelector('.loader');
        setTimeout(() => loader.classList.add('hidden'), 1000);

        // Mathematical Symbols Animation
        const symbols = [
            '∑', '∏', '∫', '∂', '√', '∛', 'ℕ', 'ℤ', 'ℚ', 'ℝ', 'ℂ', '∞',
            '∈', '∉', '⊂', '⊃', '∪', '∩', '≠', '≈', '≡', '±', '⟂', '∥',
            '∠', '△', '□', '∘', '⋅', '×', '÷', '⌈', '⌉', '⌊', '⌋', '⟨', '⟩',
            'π', 'θ', 'λ', 'μ', 'σ', 'φ', 'Ω', '∇', '∀', '∃', '∄', '∅'
        ];
        
        const container = document.getElementById('math-symbols-container');
        
        // Create 40 symbols
        for (let i = 0; i < 40; i++) {
            const symbol = document.createElement('div');
            symbol.className = 'math-symbol';
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            symbol.style.left = `${Math.random() * 100}%`;
            symbol.style.animationDelay = `${Math.random() * 20}s`;
            
            const size = 1.5 + Math.random() * 2;
            symbol.style.fontSize = `${size}rem`;
            
            const rotation = Math.random() * 360;
            symbol.style.transform = `rotate(${rotation}deg)`;
            
            const hue = Math.random() * 30 - 15;
            symbol.style.color = `hsl(39, 100%, ${50 + hue}%)`;
            
            container.appendChild(symbol);
        }

        // Add decorative fixed symbols
        const addDecorativeSymbols = () => {
            const positions = [
                { top: '10%', left: '5%' },
                { top: '15%', right: '8%' },
                { bottom: '20%', left: '7%' },
                { bottom: '15%', right: '6%' }
            ];

            positions.forEach(pos => {
                const decor = document.createElement('div');
                decor.className = 'math-decoration';
                decor.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                Object.assign(decor.style, pos);
                container.appendChild(decor);
            });
        };

        addDecorativeSymbols();
    });
