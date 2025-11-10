<<<<<<< HEAD
let deporte = document.getElementById("deporte");
let boton = document.getElementById("recarga");
let cuadriculas = document.getElementsByTagName("td");
let finde = document.querySelectorAll("fondoViolet");

let calendario = [];
let filas = 6;
let columnas = 7; 

for(let i = 0; i<filas; i++){
    calendario[i] = [];
    for(let j = 0; i<columnas; j++){
        calendario[i][j] = i * columnas + j;
=======
const casillas = document.getElementsByTagName('td');
let inputTexto = document.getElementById('deporte');
let inputRecarga = document.getElementById('recarga');

const calendario = [];
const fila = 6;
const columna = 7;

for(let i = 0; i < fila; i++){
    calendario[i] = [];
    for(let j = 0; j < columna; j++){
        calendario[i][j] =  null;
>>>>>>> 88d823b49d0901203915322aae3ea5f40c28aea4
    }
}




function nuevoCalendario(){
<<<<<<< HEAD
    let escribirNumero = 1;
if(deporte === null){
    return;
}

 if(deporte !== null){

    for(let i = 0; i<6; i++){
        for(let j = 0; j<7; j++){
         cuadriculas.;
        }
    }


 }   
}

function barraLateral(){
    let barra = document.getElementById("divAvisos");
    let i = 1;
    let barraInterval=setInterval(() => {
        alert('Quedan días libres');
        if(i===15){
            clearInterval(barraInterval)
            alert('No podrá seguir reservando')
        }
    });
    limpiarProceso()
}

function limpiarProceso(){
    calendario = [].fill("");
=======

if(inputTexto === null){
    return;
}

if(inputTexto !== null){
    


}




>>>>>>> 88d823b49d0901203915322aae3ea5f40c28aea4

}