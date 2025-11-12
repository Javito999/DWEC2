/*
 Añade, a la página anterior, un elemento tipo párrafo: 
a. Cuando se presione una letra del teclado, en el párrafo se mostrará la siguiente 
información: cuantos DNIs de 4 cifras (del 0001 al 9999) tienen esa letra y mostrará 
esos DNIs. 
b. Cuando se presione otra tecla, tendrá que eliminarse la información de la anterior*/ 

window.onload = function(){
    document.body.addEventListener('keydown', muestraLetra, false);
}


var parrafo = document.getElementsByTagName('p')[0];


function muestraLetra(event){



};