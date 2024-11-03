import data from "./data.js"


const button = document.querySelector('.verproductos');
const searchInput = document.getElementById('search-input');

const section = document.getElementById('123');
const cardContainer = document.getElementById('card-container');

button.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
  });


  function tarjetas() {
    const section = document.querySelector("section");
  
    // Generamos las tarjetas solo una vez por cada producto
    let cards = data.map((product) => `
      <div class="col-md-3">
          <div class="card" style="background-color: black; width: 25rem;">
              <img src="${product.image}" class="card-img-top" height="250px">
              <div class="card-body">
                  <h2 class="card-title" style="background-color: red">${product.title}</h2>
                  <h5 class="card-text" style="color: lightblue;">${product.detail}</h5>
                  <div style="color: yellow">
                      <h5>Precio: $ ${product.price}</h5>
                  </div>
                  <div style="color: lightblue">
                      <h6>Stock restante: ${product.stock}</h6>
                      <h6> Categoria: ${product.category} </h6>      
                  </div>
                  <div class="text-center">
                      <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
                  </div>
              </div>
          </div>
      </div>`).join('');
  
    // Inserta las tarjetas en la sección
    section.innerHTML = `<div class="row">${cards}</div>`;
  }
  
  // Llama a la función para generar las tarjetas
  tarjetas();

function redirectToSearch() {
    const searchInput = document.getElementById('searchInput').value.trim();
    
    // Verifica si hay texto ingresado antes de redirigir
    if (!searchInput =='') {
        // Redirige a la URL deseada con el parámetro `search`
        window.location.href = `../html/resultados.html?search=${encodeURIComponent(searchInput)}`;
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
}

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  accordion.addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// Verificar si el usuario está logueado
const authLink = document.getElementById('auth-link');
const loggedInEmail = localStorage.getItem("email"); // Obtener el email del localStorage

if (loggedInEmail) {
    authLink.textContent = "Cerrar sesión"; // Cambiar texto a "Cerrar sesión"
    authLink.href = "#"; // Cambiar el enlace a un valor vacío o un handler
    authLink.addEventListener("click", () => {
        localStorage.removeItem("email"); // Cerrar sesión eliminando el email del localStorage
        location.reload(); // Recargar la página para reflejar el cambio
    });
} else {
    authLink.textContent = "Iniciar sesión"; // Mantener texto como "Iniciar sesión"
    authLink.href = "login.html"; // Mantener el enlace a la página de login
}
