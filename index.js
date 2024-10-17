import data from "./data.js"

function tarjetas(){

//const h1 = document.querySelector("h1");
const section = document.querySelector("section")
//h1.innerText = "Productos";
  
 let cards = data.map((product) => `
 <div style="background-color: black;">
     <img src="${product.image}" height="300px">
     <h2 style="background-color: red">${product.title}</h2>
      <h5 style="color: lightblue;">${product.detail}</h5>
         <div style="color: yellow">
             <span> <h5> Precio: $ ${product.price}  </h5> </span>
         </div>
         <div style="color: lightblue">
          <h6> Stock restante: ${product.stock} </h6> </span>  
         </div>
     <div>
         <button><a href=./producto.html?prod=${product.id}> Ver más </a></button>
     </div>
 </div>

 `)
  // Ya aparecen las cards
  section.innerHTML= cards.join(); //union del array a string
}

tarjetas();

//Seleccionamos los botones y imputs necesarios
let SearchButton = document.getElementsByClassName("btn btn-outline-success");
let input = document.getElementsByClassName("form-control me-2");
let CleanButton = document.getElementsByClassName("delete");

