// Smooth scrolling for navigation
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Sticky header effect (optional, already handled by CSS)
// Section fade-in on scroll
const fadeEls = document.querySelectorAll(".fade-in");
const fadeInOnScroll = () => {
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);
