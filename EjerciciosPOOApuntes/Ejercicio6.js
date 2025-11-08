// parte uno

function notaMedia(){

    let peticion = prompt('intorduzca notas separacas por comas');

    let notas = peticion.split(",");
    //no se puede ocnvertir el prompt a number, hay que hacerlo:
    notas = notas.map(elem => Number(elem.trim()));

    let suma = notas.reduce((elem1, elem2) =>
        elem1 + elem2
    );
	let	notaMedia = suma/notas.length;
  
    console.log(notaMedia.toFixed(1));


}notaMedia();
// parte dos

function calculaCubo(){

    let numero = prompt('INtroduzca un número');
    numero = Number(numero);

    if((isNaN(numero)) || (!Number.isInteger(numero))){
        
        alert('No es un numero entero o no es un número');
        return false;
    };

    let cubo = numero ** 3;

    alert(`el cubo es ${cubo}`);

}calculaCubo();

// parte tres

function calculaDni(dni){



let partes = dni.split('-');

let numeroDni = partes[0];

let letra = partes[1].toUpperCase();

const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

let arrayLetras = letras.split("");
let resto = numeroDni % 23;
let letraDniCorrecta = arrayLetras[resto];

if(letraDniCorrecta === letra){
    return true;
}else {
  return false;
}


}calculaDni();

// parte cuatro

function parteCuatro(cadena){

let arrayCadena = cadena.split(" ");

let arrayCadenaMinusculas = arrayCadena.map(palabra => 
    palabra.toLowerCase());
console.log(arrayCadenaMinusculas);

let arrayCadenaPares = arrayCadenaMinusculas.filter((palabra, indice) =>{

return indice % 2 === 0; 

});
console.log(arrayCadenaPares);

let buscaAviko = arrayCadenaPares.map((palabra, indice) =>{
    palabra === "aviko" ? indice  : null;

}

);



}parteCuatro("Esto es una cadena de caracteres aviko");