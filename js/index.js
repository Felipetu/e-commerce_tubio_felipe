import data from "./data.js";

function checkSession() {
    const sessionActive = localStorage.getItem("sessionActive");
    if (sessionActive !== "true") {
        window.location.href = "login.html"; // Redirigir a la página de inicio de sesión si no está logueado
    }
}
checkSession();

const button = document.querySelector('.verproductos');
const searchInput = document.getElementById('search-input');
const section = document.getElementById('123');
const cardContainer = document.getElementById('card-container');
const spinner = document.getElementById("spinner");

// Función para simular la carga de datos con una promesa
function loadCards() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data); // Simula que la "carga" devuelve los datos
        }, 3000); // Simula un tiempo de espera de 3 segundos
    });
}

button.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
});

function generarTarjetas(products) {
    const cards = products.map((product) => `
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

    cardContainer.innerHTML = `<div class="row">${cards}</div>`;
}

async function init() {
    try {
        const products = await loadCards(); // Simula la carga de productos
        spinner.style.display = "none"; // Esconde el spinner
        generarTarjetas(products); // Renderiza las tarjetas
    } catch (error) {
        console.error("Error cargando las tarjetas:", error);
    }
}
init();

function redirectToSearch() {
    const searchInputValue = searchInput.value.trim();
    if (searchInputValue) {
        // Redirige a la URL deseada con el parámetro `search`
        window.location.href = `../html/resultados.html?search=${encodeURIComponent(searchInputValue)}`;
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
}

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
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
