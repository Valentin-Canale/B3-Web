// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = { threshold: 0, rootMargin: '50px 0px 0px 0px' };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// Fallback
setTimeout(() => {
    fadeElements.forEach(el => {
        if (!el.classList.contains('visible')) {
            el.classList.add('visible');
        }
    });
}, 500);

// Burger menu toggle
const burgerBtn = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
}

// Back to top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 400);
    });
}
