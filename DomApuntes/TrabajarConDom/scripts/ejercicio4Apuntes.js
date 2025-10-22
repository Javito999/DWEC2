function aniadeTexto(){
let nuevoNodo = document.createElement('h2');

let textoNodo = document.createTextNode('Lorem Ipsum de nuevo');
nuevoNodo.appendChild(textoNodo);

let div = document.getElementById("seccionTercera");

div.insertBefore(nuevoNodo, div.children[0]);

}

function cambiaParrafo(){

    //no funciona

    let elemento = document.getElementById('seccionPrimera').lastElementChild.textContent;
    

    let copiaParrafo = elemento.cloneNode(true);

    let div = document.getElementById('seccionTercera');

    div.insertBefore(copiaParrafo, div.children[0]);



}
function clonaDiv(){

    let divNuevo = document.createElement('div');





}