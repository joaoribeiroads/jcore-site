document.addEventListener('DOMContentLoaded', () => {
    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // --- MOBILE MENU ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
     if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- SCROLL REVEAL ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false
    });

    // Hero
    sr.reveal('.badge-premium', { delay: 100 });
    sr.reveal('.hero-text h1', { delay: 200 });
    sr.reveal('.hero-text p', { delay: 300 });
    sr.reveal('.hero-btns', { delay: 400 });
    sr.reveal('.hero-stats', { delay: 500 });
    sr.reveal('.hero-visual', { delay: 600, origin: 'right', distance: '100px' });

    // Sections
    sr.reveal('.section-header', { interval: 100 });
    sr.reveal('.exp-card', { interval: 200 });
    sr.reveal('.sol-card', { interval: 200 });
    sr.reveal('.project-card', { interval: 300 });
    sr.reveal('.testimonials-grid', { delay: 200 });
    sr.reveal('.contact-text', { origin: 'left' });
    sr.reveal('.contact-form-box', { origin: 'right' });
    sr.reveal('.map-container', { delay: 400, distance: '40px' });

    // --- PARALLAX BLOBS ---
    const blobs = document.querySelectorAll('.blob-1, .blob-2, .blob-3');
    let ticking = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5);
        targetY = (e.clientY / window.innerHeight - 0.5);
        
        if (!ticking) {
            window.requestAnimationFrame(updateBlobs);
            ticking = true;
        }
    }, { passive: true });

    function updateBlobs() {
        // Suavização (lerp) para movimento mais fluido
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        const moveX = currentX * 30;
        const moveY = currentY * 30;

        // Movendo todos de uma vez para reduzir reflows
        blobs[0].style.transform = `translate3d(${moveX * 1}px, ${moveY * 1}px, 0)`;
        blobs[1].style.transform = `translate3d(${moveX * 2}px, ${moveY * 2}px, 0)`;
        blobs[2].style.transform = `translate3d(${moveX * 3}px, ${moveY * 3}px, 0)`;

        if (Math.abs(targetX - currentX) > 0.0001 || Math.abs(targetY - currentY) > 0.0001) {
            window.requestAnimationFrame(updateBlobs);
        } else {
            ticking = false;
        }
    }

    // --- CONTACT FORM ---
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            const whatsappNumber = "5548991077261";
            const text = `Olá J-CORE!%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Mensagem:* ${mensagem}`;
            const url = `https://wa.me/${whatsappNumber}?text=${text}`;
            
            window.open(url, '_blank');
            
            form.reset();
            feedback.textContent = "Mensagem enviada com sucesso! Redirecionando...";
            feedback.hidden = false;
            feedback.className = "feedback success";
            
            setTimeout(() => {
                feedback.hidden = true;
            }, 5000);
        });
    }

    // --- YEAR ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});