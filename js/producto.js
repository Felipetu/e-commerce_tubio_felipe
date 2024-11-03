import data from './data.js';

// Simulación de estado de inicio de sesión
const isLoggedIn = true; // Cambia esto a false para simular que el usuario no está logueado

// Captura el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('prod'); // Obtiene el valor de 'prod'

console.log("El id es " + productId);

// Filtrar el producto por su ID
const product = data.find(product => product.id == productId);

if (product) {
  console.log(product.title);

  function tarjetas(product) {
    const section = document.querySelector("section");
    
    let card = `
    <br><br><br><br><br><br>
      <div class="d-flex justify-content-center"> <!-- Clase para centrar -->
          <div class="card" style="background-color: black; width: 80%; border-radius: 15px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
              <div class="row no-gutters"> <!-- Eliminar márgenes entre columnas -->
                  <div class="col-md-6"> <!-- Columna para la imagen -->
                      <img src="${product.image}" class="card-img" alt="${product.title}" height="100%" style="object-fit: cover; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"> <!-- Ajusta la imagen -->
                  </div>
                  <div class="col-md-6"> <!-- Columna para el texto -->
                      <div class="card-body">
                          <h2 class="card-title" style="background-color: red; border-radius: 10px; padding: 10px;">${product.title}</h2>
                          <h5 class="card-text" style="color: lightblue;">${product.detail}</h5>
                          <div style="color: yellow">
                              <h5>Precio: $ ${product.price}</h5>
                          </div>
                          <div style="color: lightblue">
                              <h6>Stock restante: ${product.stock}</h6>  
                          </div>
                          <div class="text-center mt-3">
                              <button class="btn btn-primary" style="width: 200px;">
                                  ${isLoggedIn ? "Comprar" : "Iniciar sesión para comprar"}
                              </button>
                              ${isLoggedIn ? `<div class="counter mt-3" style="color: lightblue;">
                                  <h6>Contador: <span id="product-counter">1</span></h6> <!-- Iniciar en 1 -->
                                  <div>
                                      <button class="btn btn-secondary" onclick="decrementCounter()" style="width: 80px;">-</button>
                                      <button class="btn btn-secondary" onclick="incrementCounter()" style="width: 80px;">+</button>
                                  </div>
                              </div>` : ""}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    
    section.innerHTML = card; // Mostrar solo la tarjeta del producto encontrado
  }

  // Función para incrementar el contador
  window.incrementCounter = function() {
    const counter = document.getElementById('product-counter');
    const currentQuantity = parseInt(counter.innerText);
    
    // Verificar si se puede incrementar sin exceder el stock
    if (currentQuantity < product.stock) {
      counter.innerText = currentQuantity + 1; // Incrementar el contador
    } else {
      alert("No puedes comprar más de lo que hay en stock."); // Mensaje de advertencia
    }
  }

  // Función para decrementar el contador
  window.decrementCounter = function() {
    const counter = document.getElementById('product-counter');
    const currentQuantity = parseInt(counter.innerText);
    
    if (currentQuantity > 1) { // No permitir que el contador sea menor que 1
      counter.innerText = currentQuantity - 1; // Decrementar el contador
    }
  }

  tarjetas(product); // Llamar a la función con el producto encontrado
} else {
  console.log("Producto no encontrado.");
}
