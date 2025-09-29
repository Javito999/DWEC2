function ejercicio4(){

   let numero = prompt("INtroduzca un número separador por /");

    let array = numero.split('/');

    console.log(array);
    
    array.sort(function(num1, num2){

        return num1 - num2;
        
     });
    
     console.log(array);

     console.log(array.join("-"))

}
ejercicio4();