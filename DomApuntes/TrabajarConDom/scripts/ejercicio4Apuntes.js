function aniadeTexto(){
let nuevoNodo = document.createElement('h2');

let textoNodo = document.createTextNode('Lorem Ipsum de nuevo');
nuevoNodo.appendChild(textoNodo);

let div = document.getElementById("seccionTercera");

div.insertBefore(nuevoNodo, div.children[0]);

}

function cambiaParrafo(){


    let elemento = document.getElementById('seccionPrimera');
    //esto devuelve un nodo.
    let parrafo = elemento.lastElementChild; 

    let copiaParrafo = parrafo.cloneNode(true);

    let div = document.getElementById('seccionTercera');

    div.insertBefore(copiaParrafo, div.children[0]);



}
function clonaDiv(){



    let seccionSegunda= document.getElementById('seccionSegunda');

    let nuevoDiv = document.createElement('div');

    let lista = document.getElementById('seccionLista');

    let divClonado = lista.cloneNode(true);

    //mete la lista clonada, justo antes del div(seccionSegunda)
    //es incorrecto, el ejercicio pide que sea despues, no antes.
    seccionSegunda.parentNode.insertBefore(nuevoDiv, seccionSegunda);

    nuevoDiv.appendChild(divClonado);

}
function eliminaFila(){

    let conjuntoDivs = document.getElementsByTagName('div');

    let ultimoDiv = conjuntoDivs[conjuntoDivs.length-1];

    let lista = ultimoDiv.lastElementChild;
    
    lista.removeChild.lastElementChild;


}