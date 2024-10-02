class producto{
    constructor(title, detail, price, stock, image){
        this.title = title;
        this.detail = detail;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }
}
// ¿Como pongo una imagen ahi ._.? // No se si estara bien de esa forma...
const mercaderia = new producto("Bugatti Chiron", "Es un automóvil superdeportivo diseñado y desarrollado por Bugatti Automobiles S.A.S", 3300000, 30, Image(src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FoS20162016_0624_132444AA_%2827785299372%29.jpg/800px-FoS20162016_0624_132444AA_%2827785299372%29.jpg"))

let etiquetas = 
`<h1> Titulo: ${producto.title}</h1>
<h2> Descripcion: ${producto.detail}</h2>
<h3> Precio: ${producto.price} </h3>
<p> Stock: ${producto.stock} </p>
${producto.image}
`
