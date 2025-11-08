function metodoMath(){

let numero1 = Math.random()*100;
let numero2 = Math.random()*100;
let numero3 = Math.random()*100;

let array = [];
array.push(numero1);
array.push(numero2);
array.push(numero3);

let ordenaNumerosMayor = array.sort(function(elem1, elem2){
    
    return elem2 - elem1;

});
  console.log(ordenaNumerosMayor);
console.log(ordenaNumerosMayor[0]);

let redondea = ordenaNumerosMayor.map(num => 
   Number(num.toFixed(2))
);
console.log(redondea);

let pregunta = prompt('Desea redondear hacia arriba?');

if(pregunta === "si"){
    let redonArriva = redondea.map(num =>
        Math.ceil(num)
        
    )
    alert(`El número menor es: ${Math.min(...redonArriva)}`)
}else if(pregunta === "no"){
    let redonAbajo = redondea.map(num => 
        Math.floor(num)
    )
    alert(`El número mayor es: ${Math.max(...redonAbajo)}`)
}

let suma = redondea.reduce((elem1, elem2)=>
        elem1+ elem2
);
let notaMedia = suma/redondea.length;

alert(notaMedia.toFixed(3));


}metodoMath();