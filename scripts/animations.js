// Fade-in on scroll for sections
window.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.animate-fadein');
    const fadeInOnScroll = () => {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
});
