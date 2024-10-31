import data from './index.js';
import data from "./data.js"

let id = window.location.search.split("=")[1];
let product = data.find((product) => product.id == id);

/*class producto{
    constructor(title, detail, price, stock, image, id){
        this.title = data.at().title;
        this.detail = data.at().detail;
        this.price = data.at().price;
        this.stock = data.at().stock;
        this.image = data.at().image;
        this.id = data.at().id;
    }
}*/

main.innerHTML = `
<div class="detalles">
  <h1>${producto.title}</h1>
    <div class="contenido">
      <img src="${producto.img}" height="200px">
        <div class="descripcion">
          <p>${producto.detail}</p>
          <span>Stock: ${producto.stock}</span>
          <span>Categoria: ${producto.category}</span>
        </div>
    </div>
  <h2>$${producto.price}</h2>
</div>`;

// ¿Como pongo una imagen ahi ._.? // No se si estara bien de esa forma...
/*const mercaderia = new producto("Bugatti Chiron", "Es un automóvil superdeportivo diseñado y desarrollado por Bugatti Automobiles S.A.S", 3300000, 30, Image(src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FoS20162016_0624_132444AA_%2827785299372%29.jpg/800px-FoS20162016_0624_132444AA_%2827785299372%29.jpg"))

let etiquetas = 
`<h1> Titulo: ${producto.title}</h1>
<h2> Descripcion: ${producto.detail}</h2>
<h3> Precio: ${producto.price} </h3>
<p> Stock: ${producto.stock} </p>
${producto.image}`

const main = document.querySelector("main")

main.innerHTML = etiquetas */