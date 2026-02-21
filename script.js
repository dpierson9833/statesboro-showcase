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
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in to content elements
document.querySelectorAll('.program-card, .benefit, .testimonial, .location-card, .about-text, .lineage-card, .org-card, .cta-block, .stat-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animations within grids
document.querySelectorAll('.programs-grid, .benefits-grid, .testimonials-grid, .locations-grid, .stats-grid').forEach(grid => {
    grid.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
    });
});
