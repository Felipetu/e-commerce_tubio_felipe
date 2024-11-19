document.addEventListener("DOMContentLoaded", () => {
  checkSessionForCart();
});

function checkSessionForCart() {
  // Verifica si el usuario tiene sesión activa
  const sessionActive = localStorage.getItem("sessionActive") === "true";
  if (!sessionActive) {
      // Redirige al login si no hay sesión activa
      window.location.href = "login.html";
  }
}
