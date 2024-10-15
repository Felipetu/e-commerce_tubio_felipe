import data from "./data.js"

function tarjetas(){

const h1 = document.querySelector("h1");
const section = document.querySelector("section")
h1.innerText = "Productos";
  
 let cards = data.map((product) => `
 <div class="card">
     <img src="${product.image}" height="200px">
     <h3>${product.title}</h3>
         <div class="cajaprecio">
             <span class="precio">$${product.price}</span>
         </div>
         <div class = "cajastock">
         <span class = "stock">  ${product.stock} </span>  
         </div>
     <div class="carrito">
         <button><a href=./producto.html?prod=${product.id}><i class='bx bx-info-circle'></i> Ver más </a></button>
     </div>
 </div>
 `)
  // Ya aparecen las cards
  section.innerHTML= cards.join().replaceAll(",", ""); //union del array a string, y se eliminan las comas
}

tarjetas();