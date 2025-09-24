let numeroLimite = parseInt(prompt("Introduzca el número límite"));

function secuenciaFibonacci(n){

     if(n < 2)
        return n;
         return secuenciaFibonacci(n - 1) +  secuenciaFibonacci(n - 2);
}
     for(let i = 0; i <= numeroLimite; i++){
     console.log(secuenciaFibonacci(i));
}
secuenciaFibonacci();