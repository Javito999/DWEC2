function mostrarMeses(){

let array = ["enero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre",
    "octubre", "noviembre", "diciembre"];

for(let i = 0; i <=array.length - 1; i++){
    alert(array[i]);
}
}
mostrarMeses();

function calculoFactorial(){

    let numero = parseInt(prompt("Introduzca un número"));
    let resultado = 1;

    for(let i = 2; i <= numero; i++){

        resultado *= i;


    }
    console.log(resultado);


}
calculoFactorial();
//no hago el de netflix, facil

function bucle(){

    

    while((numUsuario >= 45) && (numUsuario <= 72)){

        let numUsuario = parseInt(prompt("Introduce numero"));

        if((numUsuario >= 45) && (numUsuario <= 72)){
        break;
        
      }else{
        continue;
      }

    }
}bucle();
