// Get navigation links, sections, and nav indicator
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section, header');
const navIndicator = document.querySelector('.nav-indicator');

// Highlight nav link and move indicator based on scroll
function updateNav() {
    let activeIndex = 0;
    sections.forEach((section, i) => {
        if (section.getBoundingClientRect().top <= 120) {
            activeIndex = i;
        }
    });
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[activeIndex].classList.add('active');

    // Move indicator under active link
    const activeLink = navLinks[activeIndex];
    if (activeLink) {
        const rect = activeLink.getBoundingClientRect();
        const navRect = activeLink.closest('nav').getBoundingClientRect();
        navIndicator.style.left = (rect.left - navRect.left) + 'px';
        navIndicator.style.width = rect.width + 'px';
    }
}
window.addEventListener('scroll', updateNav);
window.addEventListener('resize', updateNav);
window.addEventListener('DOMContentLoaded', () => {
    updateNav();

    // Reveal elements on scroll
    function revealOnScroll() {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 80) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

// Profile card flip
document.querySelectorAll('.flip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('profileCard').classList.toggle('flipped');
    });
});

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        }
    });
});

// Contact form (demo only)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for reaching out!');
         contactForm.reset();
    });
}