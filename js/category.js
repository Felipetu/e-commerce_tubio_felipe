import data from './data.js';

function filtrarCategoria() {
    const section = document.querySelector("section");

    // Obtener el parámetro 'categoria' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaSeleccionada = urlParams.get('categoria')?.trim().toLowerCase(); // Normalizar la categoría

    // Mensaje de depuración
    console.log("Categoría seleccionada (de URL):", categoriaSeleccionada);

    // Verificar si se obtuvo la categoría de la URL
    if (!categoriaSeleccionada) {
        section.innerHTML = "<p>No se especificó ninguna categoría.</p>";
        return;
    }

    // Mostrar categorías disponibles
    const categoriasDisponibles = [...new Set(data.map(product => product.category))];
    console.log("Categorías disponibles:", categoriasDisponibles);

    // Filtrar los productos por la categoría seleccionada
    const productosFiltrados = data.filter(product => product.category.toLowerCase() === categoriaSeleccionada);

    // Mensaje de depuración
    console.log("Productos filtrados:", productosFiltrados); // Ver los productos filtrados

    // Verificar si hay productos en la categoría
    if (productosFiltrados.length === 0) {
        section.innerHTML = `<p>No se encontraron productos en la categoría "${categoriaSeleccionada}".</p>`;
        return;
    }

    // Generar el HTML de las tarjetas solo para los productos que coinciden con la categoría
    let cards = productosFiltrados.map((product) => `
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
                      <h6>Categoría: ${product.category}</h6>
                  </div>
                  <div class="text-center">
                      <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
                  </div>
              </div>
          </div>
      </div>
    `).join('');

    // Insertar las tarjetas en la sección
    section.innerHTML = `<div class="row">${cards}</div>`;
}

// Función para manejar el acordeón
function initAccordion() {
    const accordionButton = document.querySelector('.accordion');
    const panel = document.querySelector('.panel');

    accordionButton.addEventListener('click', function() {
        // Alternar la visibilidad del panel
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Llamar a la función para filtrar por categoría
filtrarCategoria();

// Inicializar el acordeón
initAccordion();

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