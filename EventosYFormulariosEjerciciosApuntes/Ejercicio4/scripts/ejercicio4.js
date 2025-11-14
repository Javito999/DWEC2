var input1 = document.getElementById("tlfn");

var checkbox = document.getElementsByClassName("franja1");
checkbox= document.getElementById("franja2");
checkbox = document.getElementById("franja3");

var radioButton = document.getElementsByName("prepago");




var lista = document.getElementById("compañias");

var indiceOpciionSel = lista.selectedIndex;
var opcionSeleccionada = lista.options[indiceOpciionSel];
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = lista.opcionSeleccionada;

var textArea = document.getElementById("textArea");

document.getElementById("boton").addEventListener('click', enviaFormulario, false);

function enviaFormulario(){

    

    for(let i = 0; i < radioButton.length; i++){
        console.log(radioButton[i].checked);

    }

    console.log(textoSeleccionado);
    console.log(valorSeleccionado);
    contieneTexto();
}

function validarNumeros(event) {
var permitidos = "0123456789";
// Obtener la tecla pulsada 
var codigoCaracter = event.charCode || event.keyCode;
var caracter = String.fromCharCode(codigoCaracter);
// Si no se trata de un valor permitido no se escribirá en la caja de texto 
return permitidos.indexOf(caracter) != -1;
}

function contieneTexto(){

    let contiene = true;
    if(textArea.value == contiene){
        return true;
    }else{
        return false;
    }

}