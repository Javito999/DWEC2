let array = [2,3,4,5,6,7,8,9,8,7,6,5,4,3,4];

let mediaClase = array.reduce((num1, num2) =>
    (num1 + num2)/2);

console.log(mediaClase);

// segunda parte

let notaAlta = array.reduce((num1, num2)=>{
    return num1 > num2 ? num1 : num2;
});

console.log(notaAlta);

//tercera parte

let precioIVA = array.map(numero => numero*1.10);

console.log(precioIVA);

