import data from "./data.js"


const button = document.querySelector('.verproductos');
const searchInput = document.getElementById('search-input');

const section = document.getElementById('123');
const cardContainer = document.getElementById('card-container');

button.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
  });


function tarjetas(){

const section = document.querySelector("section")


 let cards = data.map((product) => `
    <div class="row">
        ${data.map((product) => `
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
                        </div>
                        <div class="text-center">
                            <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>`).join('')}
    </div>`)
  section.innerHTML= cards.join(''); //union del array a string
}

tarjetas();

function redirectToSearch() {
    const searchInput = document.getElementById('searchInput').value.trim();
    
    // Verifica si hay texto ingresado antes de redirigir
    if (!searchInput =='') {
        // Redirige a la URL deseada con el parámetro `search`
        window.location.href = `../html/resultados.html?search=${encodeURIComponent(searchInput)}`;
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
}