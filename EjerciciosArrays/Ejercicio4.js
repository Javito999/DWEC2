function ejercicio4(){

let num = prompt("Introduzca un número");
let array = [];
let pares = [];
let impares = [];

for(let i = 0; i < num; i++){
 array.push(i);
}
console.log(array);

for(let i = 0; i <= array.length; i++){

    if(array[i] % 2 === 0){
        pares.push(array[i]);
    }else
        impares.push(array[i]);
}

console.log("Los números pares: " + pares);
console.log("Los números impares: " + impares);

}ejercicio4();