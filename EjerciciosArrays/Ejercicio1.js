function ejercicio1(){

let array = [];

while(true){

let num = parseInt(prompt("Introduzca un número"));

if(!isNaN(num)){
    array.push(num);
}else
    break;
}

array.sort(function(num1, num2){
     return num1 - num2;
});

console.log(array);


}ejercicio1();