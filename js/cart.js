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