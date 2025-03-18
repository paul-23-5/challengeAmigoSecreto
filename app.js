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
    nuevoElemento.innerHTML = amigo;
    lista.appendChild(nuevoElemento);
  }
}

function sortearAmigo() {
  let numeroSorteado;
  let nombreSorteado;
  if (amigos.length != 0) {
    console.log(amigos.length);
    numeroSorteado = Math.floor(Math.random() * amigos.length);
    console.log(numeroSorteado);
    nombreSorteado = amigos[numeroSorteado];
    document.getElementById(
      "resultado"
    ).innerHTML = `el amigo sorteado es '${nombreSorteado}'`;
  } else alert("la lista de amigos esta vacia");
}
