import { showToast } from "./toast.js";
import { translations } from "./dico.js";

window.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  if (!window.emailjs) {
    if (contactForm) {
      showToast({
        message: "Erreur technique : emailjs non chargé.",
        type: "error",
        ariaLive: "assertive",
      });
    }
    return;
  }
  emailjs.init("lQt3g4cuPJDC7MYWH");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const from_name = contactForm.elements["name"]?.value.trim();
      const from_email = contactForm.elements["email"]?.value.trim();
      const subject = contactForm.elements["subject"]?.value.trim();
      const message = contactForm.elements["message"]?.value.trim();
      if (!from_name || !from_email || !subject || !message) {
        showToast({
          message: "Veuillez remplir tous les champs.",
          type: "error",
          ariaLive: "assertive",
        });
        return;
      }
      const templateParams = {
        from_name,
        from_email,
        subject,
        message,
      };
      emailjs.send("service_i2i0axg", "template_a0gxawo", templateParams).then(
        () => {
          showToast({
            message:
              translations[window.currentLang || "EN"]["contact.success"] ||
              "Message sent!",
            type: "success",
            ariaLive: "polite",
          });
          contactForm.reset();
        },
        (err) => {
          console.error("EmailJS error:", err);
          showToast({
            message:
              translations[window.currentLang || "EN"]["contact.error"] ||
              "An error occurred. Please try again.",
            type: "error",
            ariaLive: "assertive",
          });
        }
      );
    });
  }
});
