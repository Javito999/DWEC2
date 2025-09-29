function ejercicio3(){

let num = prompt("Introduzca tres numeros separados por &");

let numeros = num.split('&');

if((numeros[0] == numeros[1]) && (numeros[1] == numeros[2])){
    console.log("Los tres números son iguales")
}else if((numeros[0] !== numeros[1]) && (numeros[1] !== numeros[2]) && (numeros[0] !== numeros[2])  ){
    console.log("Los tres números son distintos");
}else if((numeros[0] == numeros[1]) || (numeros[0] == numeros[2] || (numeros[2] == numeros[1]))){
    console.log("Hay dos números iguales")
}
console.log(numeros);

numeros.sort(function(num1, num2){

    return num1 - num2;
});

alert(numeros[2]);

}ejercicio3();