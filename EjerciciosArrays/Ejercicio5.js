function fibonacci(){
 
let numero = Number(prompt('Introduce un número'));
let array = [0, 1];

let resultado = 0;

while(true){

    resultado = array[array.length-1] +
    array[array.length-2];

    array.push(resultado);
if(resultado >= numero){
    break;
}

}

console.log(array);


}fibonacci();