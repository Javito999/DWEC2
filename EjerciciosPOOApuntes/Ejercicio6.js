// parte uno

function notaMedia(){

    let peticion = prompt("Introduzca notas separadas por comas");

    let notas = peticion.split(',').map(nota => parseInt(nota));

    let suma = notas.reduce((elemento, nota) => 
        elemento + nota, 0);

    let media = suma/notas.length;

    console.log(media);

    console.log(media.toFixed(1));
    


}notaMedia();