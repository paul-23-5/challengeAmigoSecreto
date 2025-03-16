// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []


function agregarAmigo(){
    let amigo = document.getElementById("amigo");

if (amigo.value != ""){
    amigos.push(amigo.value);
    amigo.value="";
    console.log(amigos);
}
else{
    alert("Por favor, inserte un nombre.")
}
}