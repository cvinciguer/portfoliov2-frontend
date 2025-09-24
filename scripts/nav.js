import { translations } from './dico.js';

// Mobile menu toggle
document.getElementById('menu-btn').onclick = function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
};
// Smooth scroll for nav links and hero buttons
document.querySelectorAll('.nav-link, .hero-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // Set dropdowns
    document.getElementById('lang-select').value = lang;
    document.getElementById('lang-select-mobile').value = lang;
    window.currentLang = lang;
}

// Expose setLanguage globally for other modules
window.setLanguage = setLanguage;

document.getElementById('lang-select').addEventListener('change', function() {
    setLanguage(this.value);
});
document.getElementById('lang-select-mobile').addEventListener('change', function() {
    setLanguage(this.value);
});

// Set default language
setLanguage('EN');
