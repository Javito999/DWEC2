function ejercicio1(){

let array = [];



while(true){

    let peticionNumero = parseInt(prompt("Introduzca un número"));

    let peticionNombre = prompt("Introduzca un nombre de persona");

    let pregunta = confirm("Se va a añadir el valor indicado?");

    if(pregunta === true){

        if(peticionNumero >= 0){
            array.splice(peticionNumero, 0, peticionNombre);
        }else if(peticionNumero <= 0){
            array.push(peticionNombre);
        }
    if(pregunta === false){
        if(peticionNumero >= 0){
            array.splice(peticionNumero -1, 1);
        }else if(peticionNumero < 0){
            array.shift();
             }
 }    
 }
 console.log(array);
}
}
ejercicio1();