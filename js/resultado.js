import data from './data.js';

// Captura el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const searchproduct = urlParams.get('search'); // Obtiene el valor de 'prod'

console.log("El resultado es " + searchproduct);

// Filtrar el producto por su ID
const product = data.find(product => product.title.toLowerCase == searchproduct.toLowerCase);

if (product) {
  console.log(product.title);

  function tarjetas(product) {
    const section = document.querySelector("section");
    
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
    
    section.innerHTML = card; // Mostrar solo la tarjeta del producto encontrado
  }
  
  tarjetas(product); // Llamar a la función con el producto encontrado
} else {
  console.log("Producto no encontrado.");
}
