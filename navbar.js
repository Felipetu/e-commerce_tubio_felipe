let categorias = ["vehiculos", "tecnologia", "futurista"]

let menu = ""; // iniciar la variable que almacenara el html

for (let category of categorias){
menu += `<li>${category}</li>`; // añadir cada categoria dentro de una etiqueta <li>
}

menu = `<ul>${menu}</ul>` //encapsular todo dentro de una lista <ul>

const header = document.querySelector('header');

header.innerHTML = menu;