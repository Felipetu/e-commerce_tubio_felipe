import data from './data.js';

// Inicializar el valor de cart-quantity en la página
document.addEventListener("DOMContentLoaded", () => {
    const quantityElement = document.getElementById("cart-quantity");
    
    // Obtener el valor de cart-quantity del localStorage, o inicializarlo en 0 si no existe
    const cartQuantity = Number(localStorage.getItem("quantity")) || 0;
    quantityElement.innerHTML = cartQuantity;
  });

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
      <div class="d-flex justify-content-center">
          <div class="card" style="background-color: #333; width: 80%; border-radius: 15px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); color: #fff;">
              <div class="row no-gutters">
                  <div class="col-md-6">
                      <img src="${product.image}" class="card-img" alt="${product.title}" height="100%" style="object-fit: cover; border-top-left-radius: 15px; border-bottom-left-radius: 15px;">
                  </div>
                  <div class="col-md-6">
                      <div class="card-body">
                          <h2 class="card-title text-center" style="background-color: #c0392b; border-radius: 10px; padding: 10px;">${product.title}</h2>
                          <h5 class="card-text text-center" style="color: #5dade2;">${product.detail}</h5>
                          <div class="text-center" style="color: #f7dc6f;">
                              <h5>Precio: $ ${product.price}</h5>
                          </div>
                          <div class="text-center" style="color: #76d7c4;">
                              <h6>Stock restante: ${product.stock}</h6>  
                          </div>
                          <div class="text-center mt-4">
                              ${isLoggedIn ? `
                              <div class="counter mt-3">
                                  <div class="input-group justify-content-center" style="gap: 15px;">
                                      <button class="btn btn-danger" type="button" onclick="decrementCounter()" style="width: 50px; font-size: 1.5rem;">-</button>
                                      <span id="product-counter" style="font-size: 1.5rem; padding: 0 20px;">1</span>
                                      <button class="btn btn-success" type="button" onclick="incrementCounter()" style="width: 50px; font-size: 1.5rem;">+</button>
                                  </div>
                              </div>
                              <button class="btn btn-primary mt-4" onclick="additemstocart()" style="width: 60%; padding: 12px; font-size: 1.2rem;">
                                  ${isLoggedIn ? "Agregar al carrito" : "Iniciar sesión para comprar"}
                              </button>` : ""}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    
    section.innerHTML = card;
  }
// enviar el resultado al cart, para que se vea en la nav
  window.sendtocart=function(){
   // localStorage.setItem("cart-quantity",  0);

    const cartvalue = Number(localStorage.getItem("quantity"));
    const items= Number(document.getElementById("product-counter").innerHTML) ;

    localStorage.setItem("cart-quantity",  cartvalue + items);
    document.getElementById("cart-quantity").innerHTML =  cartvalue + items;
}

window.additemstocart=function(){

    
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let quantity = Number(document.getElementById("product-counter").innerHTML);
    
        const idProduct = Number(window.location.search.split("=")[1]);
        const product = data.find(item => item.id === idProduct);
        const existeIdEnCart = cart.some(item => item.product.id === idProduct);

        const counter = Number(document.getElementById("cart-quantity").innerHTML);

         if (existeIdEnCart) {
            cart = cart.map(item => {
                if (item.product.id === idProduct) {
                    return {
                        ...item,
                        quantity: Number(item.quantity) + Number(counter.value)
                    };
                } else {
                    return item;
                }
            });
        } else {
            cart.push({
                product: product,
                quantity: Number(quantity)
            });
        }
    
        localStorage.setItem("cart", JSON.stringify(cart));
    
        //quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
        localStorage.setItem("quantity", quantity + counter);
    
        // const quantityTag = document.querySelector("#quantity");
        // quantityTag.innerText = quantity;
        document.getElementById("cart-quantity").innerHTML = quantity + counter;
        
       Toastify({
        text: "Agregaste producto/s al carrito de compras.",
        backgroundColor: "green",
        }).showToast();


}

  // Función para incrementar el contador
  window.incrementCounter = function() {
    const counter = document.getElementById('product-counter');
    const currentQuantity = parseInt(counter.innerText);
    
 
    if (currentQuantity < product.stock) {
      counter.innerText = currentQuantity + 1;

    } else {
      alert("No puedes comprar más de lo que hay en stock.");
    }
  }

  // Función para decrementar el contador
  window.decrementCounter = function() {
    const counter = document.getElementById('product-counter');
    const currentQuantity = parseInt(counter.innerText);
    
    if (currentQuantity > 1) {
      counter.innerText = currentQuantity - 1;

    }
  }

  tarjetas(product); // Llamar a la función con el producto encontrado
} else {
  console.log("Producto no encontrado.");
}
// Verificar si el usuario está logueado
const authLink = document.getElementById('auth-link');
const loggedInEmail = localStorage.getItem("email");

if (loggedInEmail) {
    authLink.textContent = "Cerrar sesión";
    authLink.href = "#";
    authLink.addEventListener("click", () => {
        localStorage.removeItem("email");
        location.reload();
    });
} else {
    authLink.textContent = "Iniciar sesión";
    authLink.href = "login.html";
}
  