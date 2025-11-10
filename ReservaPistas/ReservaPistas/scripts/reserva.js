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
    }
}




function nuevoCalendario(){
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

}