const lista = document.getElementById('listaItems');

const li = lista.querySelectorAll('.item');

li.forEach(elemento => {
    elemento.style.border = '2px solid green';
})