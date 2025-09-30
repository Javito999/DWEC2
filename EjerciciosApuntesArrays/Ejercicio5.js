let array = [3,6,4,7,7,3,7,8,9,10];

let aprobados = array.filter(function(nota){

    if(nota >= 5){
        return true;
    }else{
        return false;
    }

});
console.log(aprobados);

// segunda parte

let posicion1 = array.findIndex(numero => numero == 5.5);

console.log(posicion1);

//tercera parte

let todosAprobados = array.every(numero => numero >= 5);

console.log(todosAprobados);

//cuarta parte

let arrayPalabras = ['pescado', 'carne', 'melon', 'especulacion', 'rifa', 'ferias', 'raqueta', 'Alcaraz', 'ministro'];

let menosDe6Letras = arrayPalabras.filter(function(palabra){

  return palabra.length < 6;
});
console.log(menosDe6Letras);

//Quinta parte

let ultimaLetra = arrayPalabras.find(palabra => palabra.endsWith('o'));

console.log(ultimaLetra);

//sexta parte

let numsTelfno = [3434343434, 5467566645, 6789656, 6546775, 3454563];

let finalizaEn3 = numsTelfno.some(numero => numero.toString().endsWith('3'));

console.log(finalizaEn3);