let data = [{
  id: 1,
  first_name: "Jodie",
  last_name: "Mumm",
  email: "jmumm0@gmpg.org",
  gender: "Female",
  ip_address: "40.129.201.83"
}, {
  id: 2,
  first_name: "Del",
  last_name: "Hadgkiss",
  email: "dhadgkiss1@ucsd.edu",
  gender: "Female",
  ip_address: "59.113.141.28"
}, {
  id: 3,
  first_name: "Kacie",
  last_name: "Stocks",
  email: "kstocks2@arstechnica.com",
  gender: "Genderfluid",
  ip_address: "204.234.60.20"
}, {
  id: 4,
  first_name: "Herve",
  last_name: "Ferrarini",
  email: "hferrarini3@ucoz.com",
  gender: "Bigender",
  ip_address: "39.221.246.25"
}, {
  id: 5,
  first_name: "Finn",
  last_name: "Kyrkeman",
  email: "fkyrkeman4@yahoo.com",
  gender: "Male",
  ip_address: "251.128.171.168"
}, {
  id: 6,
  first_name: "Alissa",
  last_name: "Hoolaghan",
  email: "ahoolaghan5@tripod.com",
  gender: "Genderqueer",
  ip_address: "149.214.4.98"
}, {
  id: 7,
  first_name: "Daron",
  last_name: "Petrasso",
  email: "dpetrasso6@shareasale.com",
  gender: "Male",
  ip_address: "130.25.60.232"
}, {
  id: 8,
  first_name: "Alvy",
  last_name: "Seeviour",
  email: "aseeviour7@vinaora.com",
  gender: "Male",
  ip_address: "164.109.38.13"
}, {
  id: 9,
  first_name: "Prudence",
  last_name: "Meece",
  email: "pmeece8@redcross.org",
  gender: "Non-binary",
  ip_address: "179.206.105.51"
}]

function tarjetas(){

  const h1 = document.querySelector("h1");

  const section = document.querySelector("section")
  
  h1.innerText = "Productos";
  
 let cards = data.map((producto) => 
    `<div class="card">
    <img src="${producto.image}" class="card-img-top" alt="Auto">
    <div class="card-body">
      <h5 class="card-title">${producto.title}</h5>
      <p class="card-text">${producto.detail}</p>
      <a href="producto.html" class="btn btn-primary"> Ver Mas </a>
      <p class = "card-text"> ${producto.price}</p>
      <p class = "card-text"> ${producto.stock} </p>
    </div>
    </div>`);

  // Ya aparecen las cards
  section.innerHTML= cards.join().replaceAll(",", ""); //union del array a string, y se eliminan las comas
}

tarjetas();