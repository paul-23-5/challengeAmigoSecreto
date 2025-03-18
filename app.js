// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo");

  if (amigo.value != "") {
    amigos.push(amigo.value);
    amigo.value = "";
    console.log(amigos);
    actualizarAmigos();
  } else {
    alert("Por favor, inserte un nombre.");
  }
}

function actualizarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (const amigo of amigos) {
    nuevoElemento = document.createElement("li");
    console.log(nuevoElemento);
    nuevoElemento.innerHTML = amigo;
    console.log(amigo);
    lista.appendChild(nuevoElemento);
  }
}
