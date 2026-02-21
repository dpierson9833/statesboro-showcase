// Navbar scroll behavior
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll-triggered fade-in animations
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in to section content
document.querySelectorAll('.card, .stat, .culture-item, .nature-card, .about-text, .visit-info, .map-placeholder').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger card animations
document.querySelectorAll('.card-grid, .about-stats, .culture-grid, .nature-grid').forEach(grid => {
    grid.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });
});
