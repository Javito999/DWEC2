const segundoItem = document.querySelector('#listaItems li:nth-child(2)');

if (segundoItem) {
    
    segundoItem.textContent = 'Elemento 2 - Modificado!';
    console.log("Segundo elemento de la lista modificado.");
} else {
    console.log("Segundo elemento <li> de #listaItems no encontrado.");
}