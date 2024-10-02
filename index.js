function tarjetas(){
  const h1 = document.querySelector("h1");

  const section = document.querySelector("section")
  
  h1.innerText = "Productos";
  
  let array = [];
  
  for (let i = 1; i <= 9; i ++) { array.push(
    `<div class="card">
  <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto">
  <div class="card-body">
    <h5 class="card-title">Card ${i}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="producto.html" class="btn btn-primary"> Ver Mas </a>
  </div>
  </div>`
  );}
  
  section.innerHTML= array.join().replaceAll(",", ""); //union del array a string, y se eliminan las comas
}

tarjetas();