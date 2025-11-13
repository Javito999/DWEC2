var input1 = document.getElementById("tlfn");

var checkbox = document.getElementsByClassName("franja1");
checkbox= document.getElementById("franja2");
checkbox = document.getElementById("franja3");

var lista = document.getElementById("compañias");

var indiceOpciionSel = lista.selectedIndex;
var opcionSeleccionada = lista.options[indiceOpciionSel];
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = lista.opcionSeleccionada.value;

var textArea = document.get