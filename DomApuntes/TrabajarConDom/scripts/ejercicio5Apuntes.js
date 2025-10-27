function aniadeTexto(){
    let nuevoNodo = document.createElement('h2');
    let textoNodo = document.createTextNode('Lorem Ipsum de nuevo');
    nuevoNodo.appendChild(textoNodo);

    let div = document.getElementById("seccionTercera");

    div.after(nuevoNodo);
}

function cambiaParrafo(){

    let elemento = document.getElementById('seccionPrimera');
    //esto devuelve un nodo.
    let parrafo = elemento.lastElementChild;

    let copiaParrafo = parrafo.cloneNode(true);

    let div = document.querySelectorAll('#seccionTercera p');

    div.before(copiaParrafo);
    //no funciona

}

function clonaDiv(){

    let seccionSegunda= document.getElementById('seccionSegunda');

    let nuevoDiv = document.createElement('div');

    let lista = document.getElementById('seccionLista');

    let divClonado = lista.cloneNode(true);

    nuevoDiv.appendChild(divClonado);

    seccionSegunda.after(divClonado);

}
function eliminaFila(){

    let conjuntoDivs = document.getElementsByTagName('div');

    let ultimoDiv = conjuntoDivs[conjuntoDivs.length-1];

    let lista = ultimoDiv.lastElementChild;

    lista.remove();
}