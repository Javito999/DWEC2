function ejercicio6(){

let numeros = Number(prompt("Introduzca una serie de números separados por &"));

let array = [];

let partes = numeros.split("&");

for(let i = 0; i < partes.length; i++){

    array.push(Number(partes[i]));
}

console.log(array);


}ejercicio6();