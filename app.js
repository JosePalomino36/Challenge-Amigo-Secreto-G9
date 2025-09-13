let campoNombres = document.getElementById("amigo");

let listaDeAmigos = document.getElementById("listaAmigos");

let amigoSorteado = document.getElementById("resultado");

let listaGenerada =[];

function agregarAmigo() {
  let nombre = campoNombres.value.trim();

  if (nombre === "" || !isNaN(nombre)) {
    alert("Ingrese un nombre valido")
  } else{
    listaGenerada.push(nombre);
    campoNombres.value = "";
    campoNombres.focus();
    mostrarLista();
  }
}


function mostrarLista() {
  let listado = listaDeAmigos;
  listado.innerHTML = "";
  listaGenerada.forEach(nombre => {
    let li = document.createElement("li");
    li.textContent = nombre;
    listaDeAmigos.appendChild(li);
  });
}

function sorteoDeAmigos() {
  
  if (listaGenerada.length < 2) {
    alert("Debes ingresar mínimo dos nombres para hacer el sorteo");
  }

  let sorteoAleatorio = Math.floor(Math.random()*listaGenerada.length);

  let amigoSecreto = listaGenerada[sorteoAleatorio];

  amigoSorteado.textContent = `Tu amigo secreto es : ${amigoSecreto}  👍😁`
}