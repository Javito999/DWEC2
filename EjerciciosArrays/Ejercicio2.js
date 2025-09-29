function palabras(){

let palabra1 = prompt("Introduzca la primera palabras");
let palabra2 = prompt("Introduzca la segunda palabras");
let resultado = 0;

if(palabra1.length === palabra2.length){
    alert("Las dos palabras tienen las mismas letras");
}else if(palabra1.length > palabra2.length){
    resultado = palabra1.length - palabra2.length;
    console.log("La palabra: " + palabra1 + " tiene "
        + resultado + " letras más que " + palabra2
    );
}else if(palabra1.length < palabra2.length){
    resultado = palabra2.length - palabra1.length;
    console.log("La palabra: " + palabra2 + " tiene "
        + resultado + " letras más que " + palabra1
    );
}

}palabras();