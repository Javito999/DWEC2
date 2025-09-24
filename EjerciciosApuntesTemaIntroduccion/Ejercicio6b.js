let numeroLimite = parseInt(prompt("Introduzca el número límite"));

function secuenciaFibonacci(){

let numero1 = 0;
let numero2 = 1;
let resultado = 0;

for(let i = 0; i <= numeroLimite; i++){

    console.log(numero1);

    resultado = numero1 + numero2;

    numero1 = numero2;

    numero2 = resultado;

}
}secuenciaFibonacci();