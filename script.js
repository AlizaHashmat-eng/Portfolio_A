var typed = new Typed('#element', {
    strings: ["Full-Stack Developer", "Frontend Developer", "Backend Developer", "Python Developer", "Technical Writer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
