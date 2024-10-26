// Initialize Typed.js for typing animation
var typed = new Typed('#element', {
    strings: ["Full-Stack Developer", "Data Analyst", "Wordpress Developer", "Python Developer", "Technical Writer", "AI Enthusiast"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);

        // Check if the target exists and href is an internal link
        if (target && href.startsWith('#')) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Fade-in effect for service cards on scroll
window.addEventListener('scroll', function () {
    const services = document.querySelectorAll('.service-card');
    services.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.classList.add('fade-in');
        }
    });
});

