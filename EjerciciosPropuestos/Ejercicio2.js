function conversorMoneda() {

    let tipoMoneda = prompt("Introduzca el tipo de moneda");

    let valorMoneda = Number(prompt("Introduzca el valor a cambiar"));

    let resultado;

    if (tipoMoneda === "euros") {

        resultado = valorMoneda * 1.18;

        alert(resultado + " dollares");

    } else {

        resultado = valorMoneda * 0.84;

        alert(resultado + "euros")
    }

}

conversorMoneda();