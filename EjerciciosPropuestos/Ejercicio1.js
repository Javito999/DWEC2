function comprobacionNumero() {

    let numero = Number(prompt("Introduzca un numero"));

    if (numero < 0) {
        alert("el numero es negativo");
    } else if (numero > 0) {
        alert("El numero es positivo");

    } else
        alert("el numero es nulo");

}

comprobacionNumero();