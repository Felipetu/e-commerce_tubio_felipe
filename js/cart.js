document.addEventListener("DOMContentLoaded", () => {
  checkSessionForCart();
  renderCartItems();
});

//Suma los precios de todos los productos del carrito. 
//Se multiplica el precio por la cantidad de cada artículo antes de sumar.
function calculateOrderTotal(cart) {
  return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
}

function checkSessionForCart() {
  // Verifica si el usuario tiene sesión activa
  const sessionActive = localStorage.getItem("sessionActive") === "true";
  if (!sessionActive) {
      // Redirige al login si no hay sesión activa
      window.location.href = "login.html";
  }
}

function getcart(){
  const localcart = localStorage.getItem("cart", JSON.stringify(cart));
}

function renderCartItems() {
  const cartContainer = document.querySelector(".col-xl-8 .card-body"); // Selecciona el contenedor donde quieres mostrar las tarjetas
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-center">El carrito está vacío.</p>`;
    return;
  }

  const cartItemsHTML = cart
    .map((item) => {
      const total = item.product.price * item.quantity;

      return `
        <div class="d-flex align-items-start border-bottom pb-3">
          <div class="me-4">
            <img
              src="${item.product.image}"
              alt="${item.product.title}"
              class="avatar-lg rounded"
            />
          </div>
          <div class="flex-grow-1 overflow-hidden">
            <h5 class="text-truncate font-size-18">${item.product.title}</h5>
            <div class="row">
              <div class="col-md-4">
                <div class="mt-3">
                  <p class="text-muted mb-2">Precio</p>
                  <h5 class="mb-0 mt-2">$${item.product.price}</h5>
                </div>
              </div>
              <div class="col-md-5">
                <div class="mt-3">
                  <p class="text-muted mb-2">Cantidad</p>
                  <h5 class="mb-0 mt-2">${item.quantity}</h5>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mt-3">
                  <p class="text-muted mb-2">Total</p>
                  <h5>$${total}</h5>
                </div>
              </div>
              <div class="col-md-4">
              <button onclick="removeFromCart(${item.product.id})">
                 <span class="material-symbols-outlined"> delete </span>
              </button>     
              </div>
            </div>
          </div>
        </div>
        `;
    })
    .join(""); // Combina todas las tarjetas en un solo string

  cartContainer.innerHTML = cartItemsHTML;

    // Calcular el total de la orden
    const orderTotal = calculateOrderTotal(cart);
    document.querySelector(".table .fw-bold").innerText = `$${orderTotal}`;
}

// Función para actualizar el valor de quantity en localStorage
function updateQuantityInLocalStorage() {
  // Obtener el valor actual de quantity desde localStorage (si no existe, es 0)
  let currentQuantity = parseInt(localStorage.getItem("quantity") || "0");

  // Restar 1 al valor actual de quantity
  let newQuantity = currentQuantity - 1;

  // Asegurarse de que el valor no sea negativo
  if (newQuantity < 0) {
    newQuantity = 0;
  }

  // Guardar el nuevo valor de quantity en localStorage
  localStorage.setItem("quantity", newQuantity);
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Encuentra el producto en el carrito
  const productIndex = cart.findIndex(item => item.product.id === productId);

  if (productIndex !== -1) {
    if (cart[productIndex].quantity > 1) {
      // Reduce la cantidad en 1 si es mayor que 1
      cart[productIndex].quantity -= 1;
    } else {
      // Si la cantidad es 1, elimina el producto del carrito
      cart.splice(productIndex, 1);
    }
  }

  // Actualiza el carrito en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Recalcula el total de la orden después de eliminar o reducir la cantidad
  const orderTotal = calculateOrderTotal(cart);
  
  // Actualiza el total en el DOM
  document.querySelector(".table .fw-bold").innerText = `$${orderTotal}`;


  // Renderiza nuevamente los productos en el carrito
  renderCartItems();
  updateQuantityInLocalStorage()
  location.reload();
}

// // Función para mostrar un toast
// function showToast(message) {
//   Toastify({
//     text: message,
//     duration: 3000, // Duración en milisegundos
//     gravity: "top", // Posición: top o bottom
//     position: "right", // Posición: left, center o right
//     backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Estilo de fondo
//     stopOnFocus: true, // Detener el toast cuando se pasa el mouse sobre él
//   }).showToast();
// }

// Función para mostrar un SweetAlert
function showAlertgreen(message, type = 'success') {
  Swal.fire({
    title: message,       // Título del alerta
    icon: type,           // Tipo de alerta: 'success', 'error', 'warning', 'info'
    confirmButtonText : 'Okay',  // Botón de confirmación
    timer: 3000,          // Duración automática de la alerta en milisegundos
    timerProgressBar: true // Barra de progreso
  });
}

function emptyCart() {
  // Elimina el carrito del localStorage
  localStorage.removeItem("cart");
  
  // También elimina la quantity si lo necesitas
  localStorage.removeItem("quantity");

  showAlert('¡El carrito ha sido vaciado! refresque la pagina para continuar', 'success');  
}