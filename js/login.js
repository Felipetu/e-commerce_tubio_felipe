let form = document.querySelector("form");
let p = document.querySelector("p");
let button = document.querySelector("button");

// Verificar si el usuario ya está logueado
if (localStorage.getItem("email")) {
    location.href = "./index.html"; // Redirige si ya está logueado
}

const submitLogin = document.querySelector(".form");
const message = document.querySelector("#formLoginMessage");

const handlesubmitlogin = (ev) => {
    message.innerText = ""; // Limpiar mensajes previos
    ev.preventDefault(); // Prevenir el envío del formulario

    // Obtener valores de los campos
    let emailForm = ev.target.elements.email.value; // Email ingresado
    let passwordForm = ev.target.elements.password.value; // Contraseña ingresada

    // Comparar con los valores predefinidos
    if (emailForm === user_login.email && passwordForm === user_login.password) {
        // Guardar sesión activa y otros datos en localStorage
        localStorage.setItem("sessionActive", "true"); // Guardar sesión activa
        localStorage.setItem("email", emailForm); // Guardar email en localStorage
        
        // Inicializar el carrito como un array vacío y convertirlo a string
        const cart = [];
        localStorage.setItem("cart", JSON.stringify(cart)); // Agregar el carrito al localStorage
        
        // Inicializar quantity como 0
        const quantity = 0;
        localStorage.setItem("quantity", quantity); // Agregar quantity al localStorage

        location.href = "./index.html"; // Redirigir al index
    } else {
        message.innerText = "Por favor introduce credenciales válidas."; // Mensaje de error
    }
};

submitLogin.addEventListener("submit", handlesubmitlogin);
