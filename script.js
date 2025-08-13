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

// Social proof stream
function initSocialProof() {
    const socialProofDiv = document.getElementById('social-proof');
    if (!socialProofDiv) return;
    
    const proofs = [
        { name: 'Brooklyn Bakery', text: 'loves their professional design' },
        { name: 'Manhattan Fitness', text: 'got exactly what they needed' },
        { name: 'Local Coffee Shop', text: 'got their site in 24 hours' },
        { name: 'Bronx Pizza', text: 'loves their mobile-friendly design' },
        { name: 'Staten Island Salon', text: 'thrilled with the quality' },
        { name: 'NYC Services', text: 'highly recommends our work' },
        { name: 'Brooklyn Boutique', text: 'exceeded their expectations' },
        { name: 'Small Business Owner', text: 'best value they ever found' }
    ];
    
    const proofContent = document.createElement('div');
    proofContent.className = 'social-proof-content';
    
    // Duplicate items for seamless loop
    [...proofs, ...proofs].forEach(proof => {
        const item = document.createElement('div');
        item.className = 'proof-item';
        item.innerHTML = `<strong>${proof.name}</strong> ${proof.text}`;
        proofContent.appendChild(item);
    });
    
    socialProofDiv.appendChild(proofContent);
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
            element.style.animation = 'glitch 0.3s ease infinite';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animation = '';
        });
    });
}

// Add glitch animation
const style = document.createElement('style');
style.textContent = `
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