

// Inicializa quantity si no existe en localStorage
if (!localStorage.getItem('quantity')) {
    localStorage.setItem('quantity', 0);
  }
  
// Función para actualizar el número en el ícono del carrito
function updateCartQuantityDisplay(quantity = null) {
  const cartQuantityElement = document.getElementById('cart-quantity');
  const quantityValue = quantity !== null ? quantity : localStorage.getItem('quantity') || 0;
  cartQuantityElement.textContent = quantityValue;
}

  // Función para actualizar la cantidad mostrada en el ícono del carrito
  function updateCartQuantityDisplay() {
    const cartQuantityElement = document.getElementById('cart-quantity');
    const quantity = localStorage.getItem('quantity');
    cartQuantityElement.textContent = quantity;
  }
  
  // Llama a esta función al cargar la página para mostrar la cantidad actual
  document.addEventListener('DOMContentLoaded', updateCartQuantityDisplay);
  
  // Función para agregar productos al carrito
  function addToCart() {
    let currentQuantity = parseInt(localStorage.getItem('quantity'));
    currentQuantity += 1;
    localStorage.setItem('quantity', currentQuantity);
    updateCartQuantityDisplay();
  }
  
  // Función para quitar productos del carrito
  function removeFromCart() {
    let currentQuantity = parseInt(localStorage.getItem('quantity'));
    currentQuantity = Math.max(0, currentQuantity - 1);
    localStorage.setItem('quantity', currentQuantity);
    updateCartQuantityDisplay();
  }
  

document.addEventListener('DOMContentLoaded', () => {
    const cartQuantityElement = document.getElementById('cart-quantity');
  
    // Obtener la cantidad de items desde el localStorage
    const quantity = localStorage.getItem('quantity') || 0;
  
    // Mostrar la cantidad en el ícono del carrito
    cartQuantityElement.textContent = quantity;
  });  



// Al cargar la página, actualizamos el ícono del carrito
document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantityDisplay();
});
