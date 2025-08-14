// Particle System
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Countdown timer
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Update spots left randomly
function updateSpotsLeft() {
    const spotsElement = document.getElementById('spots-left');
    if (!spotsElement) return;
    
    const spots = [2, 3, 4, 5];
    const randomSpot = spots[Math.floor(Math.random() * spots.length)];
    spotsElement.textContent = randomSpot;
}

// ASCII Art Banner
function initSocialProof() {
    const socialProofDiv = document.getElementById('social-proof');
    if (!socialProofDiv) return;
    
    const asciiArt = [
        { text: '(⌐■_■)', type: 'cool' },
        { text: '¯\\_(ツ)_/¯', type: 'shrug' },
        { text: '(╯°□°)╯︵ ┻━┻', type: 'flip' },
        { text: '▁▂▃▄▅▆▇█▇▆▅▄▃▂▁', type: 'wave' },
        { text: '[ ██████████ ] 100%', type: 'loading' },
        { text: '☆ﾟ.*･｡ﾟ', type: 'sparkle' },
        { text: '◦•●◉✿◉●•◦', type: 'flower' },
        { text: '｡◕‿◕｡', type: 'happy' },
        { text: '(☞ﾟヮﾟ)☞', type: 'point' },
        { text: '♪┏(・o･)┛♪', type: 'dance' },
        { text: '┌(ಠ_ಠ)┘', type: 'robot' },
        { text: '☁ ☾ ☁　˚☽˚　☁ ☾ ☁', type: 'dreamy' },
        { text: '∞ ∞ ∞ ∞ ∞ ∞ ∞', type: 'infinity' },
        { text: '◄ ◊ ○ ◊ ► ◄ ◊ ○ ◊ ►', type: 'geometric' },
        { text: '｡･:*:･ﾟ★,｡･:*:･ﾟ☆', type: 'stars' },
        { text: '⚡ ⚡ ⚡ ⚡ ⚡', type: 'lightning' },
        { text: '[>o_]> <[_o<] [>o_]>', type: 'kirby' },
        { text: '♬♪♫ ♬♪♫ ♬♪♫', type: 'music' },
        { text: '⟨⟨⟨ ◉ ⟩⟩⟩', type: 'focus' },
        { text: '◐ ◑ ◒ ◓ ◐ ◑ ◒ ◓', type: 'rotate' }
    ];
    
    const proofContent = document.createElement('div');
    proofContent.className = 'social-proof-content';
    
    // Create multiple copies for seamless loop
    const repeatCount = 3;
    for (let repeat = 0; repeat < repeatCount; repeat++) {
        asciiArt.forEach(art => {
            const item = document.createElement('div');
            item.className = `proof-item ascii-${art.type}`;
            item.innerHTML = art.text;
            proofContent.appendChild(item);
        });
    }
    
    socialProofDiv.appendChild(proofContent);
    
    // Add random animation speed variation
    const animationDuration = 8 + Math.random() * 12; // 8-20 seconds
    proofContent.style.animationDuration = `${animationDuration}s`;
    
    // Randomly reverse direction sometimes
    if (Math.random() < 0.3) {
        proofContent.style.animationDirection = 'reverse';
    }
    
    // Add periodic special effects
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            addSpecialEffect(socialProofDiv);
        }
    }, 5000);
    
    // Add click interaction for instant special effects
    socialProofDiv.addEventListener('click', () => {
        addSpecialEffect(socialProofDiv);
    });
    
    // Randomly change animation speed
    setInterval(() => {
        if (Math.random() < 0.2) { // 20% chance every 10 seconds
            const newDuration = 6 + Math.random() * 14; // 6-20 seconds
            proofContent.style.animationDuration = `${newDuration}s`;
        }
    }, 10000);
}

// Special effects for the ASCII banner
function addSpecialEffect(container) {
    const effects = ['glitch', 'rainbow', 'glow', 'shake'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    
    container.classList.add(`effect-${randomEffect}`);
    
    setTimeout(() => {
        container.classList.remove(`effect-${randomEffect}`);
    }, 2000);
    
    // Add visual feedback
    const effectIndicator = document.createElement('div');
    effectIndicator.style.position = 'absolute';
    effectIndicator.style.top = '10px';
    effectIndicator.style.left = '20px';
    effectIndicator.style.background = 'rgba(0, 255, 204, 0.8)';
    effectIndicator.style.color = '#000';
    effectIndicator.style.padding = '5px 10px';
    effectIndicator.style.borderRadius = '15px';
    effectIndicator.style.fontSize = '0.8rem';
    effectIndicator.style.fontWeight = 'bold';
    effectIndicator.style.zIndex = '10';
    effectIndicator.style.animation = 'fadeInOut 2s ease-in-out';
    effectIndicator.textContent = `${randomEffect.toUpperCase()} EFFECT!`;
    
    container.style.position = 'relative';
    container.appendChild(effectIndicator);
    
    setTimeout(() => {
        if (container.contains(effectIndicator)) {
            container.removeChild(effectIndicator);
        }
    }, 2000);
}

// Add matrix rain effect occasionally
function addMatrixRain() {
    const socialProofDiv = document.getElementById('social-proof');
    if (!socialProofDiv || Math.random() > 0.05) return; // 5% chance
    
    const matrixChars = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ01';
    const matrixContainer = document.createElement('div');
    matrixContainer.style.position = 'absolute';
    matrixContainer.style.top = '0';
    matrixContainer.style.left = '0';
    matrixContainer.style.right = '0';
    matrixContainer.style.bottom = '0';
    matrixContainer.style.pointerEvents = 'none';
    matrixContainer.style.zIndex = '5';
    matrixContainer.style.opacity = '0.6';
    
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = `${Math.random() * 100}%`;
        column.style.top = '0';
        column.style.color = '#00ff41';
        column.style.fontSize = '14px';
        column.style.fontFamily = 'monospace';
        column.style.animation = `matrix-fall ${2 + Math.random() * 3}s linear infinite`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        
        let text = '';
        for (let j = 0; j < 10; j++) {
            text += matrixChars[Math.floor(Math.random() * matrixChars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
    }
    
    socialProofDiv.style.position = 'relative';
    socialProofDiv.appendChild(matrixContainer);
    
    setTimeout(() => {
        if (socialProofDiv.contains(matrixContainer)) {
            socialProofDiv.removeChild(matrixContainer);
        }
    }, 8000);
}

// Price calculator
function initPriceCalculator() {
    const checkboxes = document.querySelectorAll('.calculator-option input[type="checkbox"]');
    const totalElement = document.getElementById('calculated-total');
    
    if (!totalElement) return;
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            let total = 50;
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    total += parseInt(cb.value);
                }
            });
            
            // Animate the number change
            const start = parseInt(totalElement.textContent);
            const duration = 300;
            const startTime = performance.now();
            
            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (total - start) * progress);
                totalElement.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            
            requestAnimationFrame(animate);
        });
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.service-card, .portfolio-item, .pricing-card, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Form handling
function initFormHandling() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Animate button
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;
        
        // Send to email
        const subject = `New Website Request from ${data.name}`;
        const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0ABusiness: ${data.business}%0D%0AWebsite Type: ${data['website-type']}%0D%0A%0D%0AMessage:%0D%0A${data.message}`;
        
        window.location.href = `mailto:50dollarsites@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Show success message
        setTimeout(() => {
            button.textContent = '✓ Message Sent!';
            button.style.background = 'linear-gradient(135deg, #00d084 0%, #00a06a 100%)';
            
            // Reset form
            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
            }, 3000);
        }, 500);
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Glitch effect on hover for title
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.logo, .hero-title');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('glitching');
            
            // Original glitch fog effect
            const titleLines = element.querySelectorAll('.glitch-text, .glitch-text-alt');
            titleLines.forEach((line, index) => {
                line.style.animation = `glitchFog 0.3s ease infinite`;
            });
        });
        
        element.addEventListener('mouseleave', () => {
            element.classList.remove('glitching');
            
            // Remove any animation on mouse leave
            const titleLines = element.querySelectorAll('.glitch-text, .glitch-text-alt');
            titleLines.forEach((line) => {
                line.style.animation = '';
            });
        });
    });
}

// Add glitch animation
const style = document.createElement('style');
style.textContent = `
    .glitching {
        filter: blur(0.3px);
    }
    
    @keyframes glitchFog {
        0%, 100% {
            text-shadow: 
                0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                0.025em 0.05em 0 rgba(0, 0, 255, 0.75),
                0 0 10px rgba(255, 0, 255, 0.5),
                0 0 20px rgba(0, 255, 255, 0.3),
                0 0 30px rgba(255, 255, 0, 0.2);
            filter: blur(0.5px) contrast(1.2);
        }
        20% {
            text-shadow: 
                -0.05em 0.025em 0 rgba(255, 0, 0, 0.75),
                0.05em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 0, 255, 0.75),
                0 0 15px rgba(255, 0, 255, 0.6),
                0 0 25px rgba(0, 255, 255, 0.4),
                0 0 35px rgba(255, 255, 0, 0.3);
            filter: blur(0.8px) contrast(1.5) brightness(1.1);
        }
        40% {
            text-shadow: 
                0.05em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                -0.05em 0 0 rgba(0, 0, 255, 0.75),
                0 0 20px rgba(255, 0, 255, 0.7),
                0 0 30px rgba(0, 255, 255, 0.5),
                0 0 40px rgba(255, 255, 0, 0.4);
            filter: blur(0.3px) contrast(1.8) brightness(1.2);
        }
        60% {
            text-shadow: 
                -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 255, 0, 0.75),
                0.05em 0.025em 0 rgba(0, 0, 255, 0.75),
                0 0 12px rgba(255, 0, 255, 0.5),
                0 0 22px rgba(0, 255, 255, 0.3),
                0 0 32px rgba(255, 255, 0, 0.2);
            filter: blur(1px) contrast(1.3);
        }
        80% {
            text-shadow: 
                0.025em -0.05em 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 0, 255, 0.75),
                0 0 18px rgba(255, 0, 255, 0.8),
                0 0 28px rgba(0, 255, 255, 0.6),
                0 0 38px rgba(255, 255, 0, 0.4);
            filter: blur(0.6px) contrast(1.6) brightness(1.15);
        }
    }
    
    @keyframes glitch {
        0%, 100% {
            text-shadow: 
                0.025em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 0, 255, 0.75);
        }
        25% {
            text-shadow: 
                -0.025em 0 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em -0.025em 0 rgba(0, 0, 255, 0.75);
        }
        50% {
            text-shadow: 
                0.025em 0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0 0 rgba(0, 0, 255, 0.75);
        }
        75% {
            text-shadow: 
                -0.025em -0.025em 0 rgba(255, 0, 0, 0.75),
                -0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                0.025em 0 0 rgba(0, 0, 255, 0.75);
        }
    }
    
    .nav-menu.active {
        display: flex !important;
        position: fixed;
        top: 60px;
        right: 0;
        background: rgba(10, 10, 15, 0.98);
        flex-direction: column;
        padding: 2rem;
        border-radius: 0 0 0 20px;
        border: 1px solid var(--border-color);
        backdrop-filter: blur(20px);
        z-index: 999;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @keyframes hypnoticBreathe {
        0% {
            transform: scale(1) rotate(0deg);
            filter: hue-rotate(0deg) saturate(1.2) brightness(1);
        }
        25% {
            transform: scale(1.02) rotate(0.5deg);
            filter: hue-rotate(60deg) saturate(1.4) brightness(1.05);
        }
        50% {
            transform: scale(1.05) rotate(0deg);
            filter: hue-rotate(120deg) saturate(1.6) brightness(1.1);
        }
        75% {
            transform: scale(1.02) rotate(-0.5deg);
            filter: hue-rotate(180deg) saturate(1.4) brightness(1.05);
        }
        100% {
            transform: scale(1) rotate(0deg);
            filter: hue-rotate(240deg) saturate(1.2) brightness(1);
        }
    }

    @keyframes auroraBorealis {
        0% {
            text-shadow: 
                0 0 10px rgba(138, 43, 226, 0.8),
                0 0 20px rgba(138, 43, 226, 0.6),
                0 0 30px rgba(138, 43, 226, 0.4);
        }
        20% {
            text-shadow: 
                0 0 10px rgba(75, 0, 130, 0.8),
                0 0 20px rgba(75, 0, 130, 0.6),
                0 0 30px rgba(75, 0, 130, 0.4),
                0 0 40px rgba(75, 0, 130, 0.2);
        }
        40% {
            text-shadow: 
                0 0 10px rgba(0, 100, 200, 0.8),
                0 0 20px rgba(0, 100, 200, 0.6),
                0 0 30px rgba(0, 100, 200, 0.4),
                0 0 40px rgba(0, 100, 200, 0.2);
        }
        60% {
            text-shadow: 
                0 0 10px rgba(0, 150, 150, 0.8),
                0 0 20px rgba(0, 150, 150, 0.6),
                0 0 30px rgba(0, 150, 150, 0.4),
                0 0 40px rgba(0, 150, 150, 0.2);
        }
        80% {
            text-shadow: 
                0 0 10px rgba(100, 200, 100, 0.8),
                0 0 20px rgba(100, 200, 100, 0.6),
                0 0 30px rgba(100, 200, 100, 0.4),
                0 0 40px rgba(100, 200, 100, 0.2);
        }
        100% {
            text-shadow: 
                0 0 10px rgba(138, 43, 226, 0.8),
                0 0 20px rgba(138, 43, 226, 0.6),
                0 0 30px rgba(138, 43, 226, 0.4);
        }
    }

    @keyframes floatingDream {
        0% {
            transform: translateY(0px) translateX(0px);
        }
        25% {
            transform: translateY(-2px) translateX(1px);
        }
        50% {
            transform: translateY(-1px) translateX(-1px);
        }
        75% {
            transform: translateY(1px) translateX(0px);
        }
        100% {
            transform: translateY(0px) translateX(0px);
        }
    }

    @keyframes subtleGlitchRest {
        0%, 90%, 100% {
            text-shadow: 
                1px 1px 0px rgba(255, 0, 100, 0.7),
                -1px -1px 0px rgba(0, 255, 255, 0.7),
                0px 0px 5px rgba(255, 255, 255, 0.3);
        }
        93% {
            text-shadow: 
                -1px 1px 0px rgba(255, 0, 100, 0.8),
                1px -1px 0px rgba(0, 255, 255, 0.8),
                0px 0px 8px rgba(255, 255, 255, 0.4);
        }
        96% {
            text-shadow: 
                1px -1px 0px rgba(255, 0, 100, 0.6),
                -1px 1px 0px rgba(0, 255, 255, 0.6),
                0px 0px 3px rgba(255, 255, 255, 0.2);
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initSocialProof();
    initPriceCalculator();
    initScrollAnimations();
    initParallax();
    initFormHandling();
    initMobileMenu();
    initGlitchEffect();
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Update spots occasionally
    updateSpotsLeft();
    setInterval(updateSpotsLeft, 30000);
    
    // Occasionally trigger matrix rain effect
    setInterval(() => {
        addMatrixRain();
    }, 15000); // Check every 15 seconds
});

// Performance optimization - lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}