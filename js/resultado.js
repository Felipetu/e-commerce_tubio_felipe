import data from './data.js';

// Captura el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const searchproduct = urlParams.get('search'); // Obtiene el valor de 'search'
console.log("Buscando:", searchproduct);

// Imprimir títulos de todos los productos para verificar coincidencias
console.log("Lista de productos:");
data.forEach((product) => console.log(product.title));

// Filtrar productos que contengan el término de búsqueda en su título
const filteredProducts = data.filter((product) => 
  product.title.toLowerCase().includes(searchproduct.toLowerCase())
);

if (filteredProducts.length > 0) {
  // Usamos el primer producto que coincide
  const product = filteredProducts[0];
  console.log("Producto encontrado:", product.title);

  // Función para generar la tarjeta del producto
  function tarjetas(product) {
    const section = document.querySelector("section");
    
    // Crear la tarjeta de producto en HTML
    let card = `
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="d-flex justify-content-center"> <!-- Clase para centrar -->
          <div class="card" style="background-color: black; width: 80%;">
              <div class="row no-gutters"> <!-- Eliminar márgenes entre columnas -->
                  <div class="col-md-6"> <!-- Columna para la imagen -->
                      <img src="${product.image}" class="card-img" alt="${product.title}" height="100%" style="object-fit: cover;"> <!-- Ajusta la imagen -->
                  </div>
                  <div class="col-md-6"> <!-- Columna para el texto -->
                      <div class="card-body">
                          <h2 class="card-title" style="background-color: red">${product.title}</h2>
                          <h5 class="card-text" style="color: lightblue;">${product.detail}</h5>
                          <div style="color: yellow">
                              <h5>Precio: $ ${product.price}</h5>
                          </div>
                          <div style="color: lightblue">
                              <h6>Stock restante: ${product.stock}</h6>  
                          </div>
                          <div class="text-center">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    
    // Insertar la tarjeta en el HTML
    section.innerHTML = card;
  }
  
  // Llamar a la función para mostrar la tarjeta del producto
  tarjetas(product);
} else {
  // Mostrar mensaje si no se encuentra el producto
  console.log("Producto no encontrado.");
  const section = document.querySelector("section");
  alert("No se encontro el producto")
}

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