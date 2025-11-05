let timeOUt=setTimeout(()=>{
    alert('Bienvenido');
    
}, 5000);

let i =0;
let timeInterval=setInterval(() => {
    alert('Bienvenido de nuevo');
    i++;
    if(i==2){
        
        clearInterval(timeInterval);
    }
}, 7000);

function pulsaBoton(){

let contadorSegundos = 3;
let idInterval=setInterval(() => {
console.log('Han pasado '+ contadorSegundos +  ' segundos');
contadorSegundos+=3;

}, 3000);


}