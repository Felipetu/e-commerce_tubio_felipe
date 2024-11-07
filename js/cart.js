// Verificar si el usuario tiene sesión activa
function checkSession() {
    const sessionActive = localStorage.getItem("sessionActive");
  
    // Si no hay sesión activa, redirigir al usuario a la página de inicio
    if (sessionActive !== true) {
      window.location.href = "index.html";
    } 
  }

  // Ejecutar la función de verificación de sesión al cargar la página
  document.addEventListener("DOMContentLoaded", checkSession);
  