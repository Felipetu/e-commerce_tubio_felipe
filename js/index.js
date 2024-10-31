import data from "./data.js"

function tarjetas(){

//const h1 = document.querySelector("h1");
const section = document.querySelector("section")
//h1.innerText = "Productos";
  
 let cards = data.map((product) => `
    <div class="d-flex row justify-content-center">

            <div class="card" style="background-color: black; width: 18rem;">
                <img src="${product.image}" class="card-img-top" height="200px">
                <div class="card-body">
                <h2 class="card-title" style="background-color: red">${product.title}</h2>
                <h5 class="card-text" style="color: lightblue;">${product.detail}</h5>
                    <div style="color: yellow">
                        <span> <h5> Precio: $ ${product.price} </h5> </span>
                    </div>
                <div style="color: lightblue">
                 <h6> Stock restante: ${product.stock} </h6> </span>  
                </div>
                <div class="text-center">
                <button class="btn btn-primary"><a href=./producto.html?prod=${product.id}></a> Ver más </button>
                </div>
                </div>
            </div>
       
    </div>
 `)
  // Ya aparecen las cards
  section.innerHTML= cards.join(); //union del array a string
}

tarjetas();
