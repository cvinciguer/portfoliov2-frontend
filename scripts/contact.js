import { translations } from '../dico.js';

window.addEventListener('DOMContentLoaded', function() {
    if (window.emailjs) {
        emailjs.init('lQt3g4cuPJDC7MYWH');
    }
    const contactForm = document.getElementById('contact-form');
    // Toast notification
    function showToast(message, type = 'success') {
        let toast = document.getElementById('contact-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'contact-toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.className = 'toast toast-' + type + ' show';
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }
    if (contactForm && window.emailjs) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            emailjs.sendForm('service_i2i0axg', 'template_a0gxawo', this)
                .then(() => {
                    showToast(translations[window.currentLang || 'EN']['contact.success'] || 'Message sent!', 'success');
                    contactForm.reset();
                }, (err) => {
                    showToast(translations[window.currentLang || 'EN']['contact.error'] || 'An error occurred. Please try again.', 'error');
                });
        });
    }
});
