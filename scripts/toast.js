// scripts/toast.js
// Module de gestion des notifications toast

export function showToast({
  message,
  type = "info",
  duration = 3000,
  ariaLive = "polite",
}) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", ariaLive);
    toast.tabIndex = 0;
    toast.style.position = "fixed";
    toast.style.bottom = "2rem";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.zIndex = "9999";
    toast.style.minWidth = "200px";
    toast.style.maxWidth = "90vw";
    toast.style.padding = "1rem 2rem";
    toast.style.borderRadius = "8px";
    toast.style.fontWeight = "bold";
    toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
    toast.style.textAlign = "center";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.background =
    type === "success" ? "#22c55e" : type === "error" ? "#ef4444" : "#2563eb";
  toast.style.color = "#fff";
  toast.style.opacity = "1";
  toast.focus();
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, duration);
}
