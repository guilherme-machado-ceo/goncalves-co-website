// Efeitos JavaScript para Gonçalves & Co

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeNeonEffects();
    initializeParticleSystem();
    initializeScrollEffects();
    initializeAccordion();
    initializeFormEffects();
    initializeSpotlightEffect();
});

// Sistema de Partículas Animadas
function initializeParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-system';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);

    // Criar partículas
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const isOrange = Math.random() > 0.5;
    const size = Math.random() * 4 + 1;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${isOrange ? '#ff4500' : '#00ffff'};
        border-radius: 50%;
        box-shadow: 0 0 ${size * 3}px ${isOrange ? '#ff4500' : '#00ffff'};
        opacity: ${Math.random() * 0.8 + 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
    `;
    
    container.appendChild(particle);
    
    // Remover partícula após animação e criar nova
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, (Math.random() * 10 + 10) * 1000);
}

// Efeitos de Scroll
function initializeScrollEffects() {
    const sections = document.querySelectorAll('.section, .hero, .service-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });
}

// Efeitos de Neon Interativos
function initializeNeonEffects() {
    // Efeito de hover nos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'neonPulse 0.5s ease';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Efeito de digitação no título hero
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        typeWriter(heroTitle, text, 100);
    }
}

// Efeito de máquina de escrever
function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Acordeão Interativo
function initializeAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionBody = accordionItem.querySelector('.accordion-body');
            const isActive = accordionItem.classList.contains('active');
            
            // Fechar todos os outros acordeões
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const body = item.querySelector('.accordion-body');
                if (body) {
                    body.style.maxHeight = '0';
                    body.style.padding = '0 1.5rem';
                }
            });
            
            // Abrir/fechar o acordeão clicado
            if (!isActive) {
                accordionItem.classList.add('active');
                accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
                accordionBody.style.padding = '1.5rem';
                
                // Efeito de brilho
                accordionItem.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.4)';
                setTimeout(() => {
                    accordionItem.style.boxShadow = '';
                }, 500);
            }
        });
    });
}

// Efeitos no Formulário
function initializeFormEffects() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.4)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
        
        // Validação em tempo real
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.borderColor = '#00ffff';
                this.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.3)';
            } else {
                this.style.borderColor = '#2c2c2c';
                this.style.boxShadow = '';
            }
        });
    });
}

// Efeito Spotlight que segue o mouse
function initializeSpotlightEffect() {
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight';
    spotlight.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(spotlight);
    
    let mouseX = 0, mouseY = 0;
    let spotlightX = 0, spotlightY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        spotlight.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        spotlight.style.opacity = '0';
    });
    
    // Animação suave do spotlight
    function animateSpotlight() {
        spotlightX += (mouseX - spotlightX) * 0.1;
        spotlightY += (mouseY - spotlightY) * 0.1;
        
        spotlight.style.left = (spotlightX - 150) + 'px';
        spotlight.style.top = (spotlightY - 150) + 'px';
        
        requestAnimationFrame(animateSpotlight);
    }
    animateSpotlight();
}

// Adicionar animações CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes neonPulse {
        0% { box-shadow: 0 0 20px var(--lava-orange); }
        50% { box-shadow: 0 0 40px var(--neon-cyan), 0 0 60px var(--neon-cyan); }
        100% { box-shadow: 0 0 20px var(--lava-orange); }
    }
    
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .accordion-item.active .accordion-body {
        border-top-color: var(--neon-cyan);
    }
    
    .form-group {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Efeito de carregamento
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--dark-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    const loadingText = document.createElement('div');
    loadingText.textContent = 'Gonçalves & Co';
    loadingText.style.cssText = `
        font-size: 3rem;
        color: var(--lava-orange);
        text-shadow: 0 0 30px var(--lava-orange);
        animation: logoGlow 1s ease-in-out infinite alternate;
    `;
    
    loader.appendChild(loadingText);
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 500);
    }, 2000);
});