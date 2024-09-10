console.log("Hola");
let h1 = document.querySelector(".productos");
h1.innerHTML = "Productos";

let section = document.querySelector(".container");

let array = [];

for (let i = 1; i <= 9; i ++) {
    array.push(`
<div class="card">
  <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto">
  <div class="card-body">
    <h5 class="card-title">Card ${i}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary"> Mostrar</a>
  </div>
</div>`);
arraycard.push(card)
}
section.innerHTML= array;
document.querySelector("section")