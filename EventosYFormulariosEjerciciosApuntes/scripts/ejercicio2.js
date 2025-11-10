/**
 * Cuando se pulse sobre el primer elemento h2:
 *      En caso de que estén visibles los párrafos segundo y quinto de la página, desaparezcan.
 *      En caso contrario, aparecerán en su posición original. 
 *      Se añada al valor del atributo size de los input de tipo texto 5.
 */
document.getElementsByTagName('h2')[0].addEventListener('click', invisibilizarParrafos, false);
function invisibilizarParrafos() {
    //Visibilizar u ocultar párrafos
    let parrafosPagina = document.getElementsByTagName("p");
    let parrafo2 = parrafosPagina[1];
    let parrafo5 = parrafosPagina[4];
    console.log(parrafo2.hidden);
    if (parrafo2.hidden == false) { // Si no tiene atributo hidden se asigna a true
        parrafo2.hidden = true;
        parrafo5.hidden = true;
    } else { //En caso contrario, eliminamos el atributo
        parrafo2.removeAttribute("hidden");
        parrafo5.removeAttribute("hidden")
    }

    //Cambiar size de los inputs
    let inputs = document.getElementsByTagName("input");
    inputs = Array.from(inputs);
    let inputsTexto = inputs.filter(input => {
        if (input.type === "text")
            return true;
    });
    inputsTexto.forEach(input => {
        input.size = input.size + 5;
    });
}

/**
 * Cuando se pase el ratón por encima del texto “Escoge el sexo”: 
 *      Se quite el atributo name a los radio buttons. Comprueba como se comportan ahora.
 */
function eliminarAtributoName() {
    let inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "radio")
            inputs[i].removeAttribute("name");
    }
}

/**
 * Cuando pase el ratón por encima del título del formulario: 
 *      Se añada un nuevo atributo name a los radio button con un valor diferente al que tuvieran de inicio.
 */
function asignarAtributoNombre() {
    let inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].name = "nuevoNombre";
        console.log(inputs[i].value + " " + inputs[i].name);
    }
}
/**
 * Crea un elemento de tipo h2 con el texto “Lorem Ipsum de nuevo”. 
 * Inclúyelo como primer elemento hijo del div seccionTercera cuando se pulse sobre el primer párrafo 
 * de dicha sección.
 */
function insertarEncabezadoH2() {
    let nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "Lorem Ipsum de nuevo";
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = seccionTercera.childNodes[0];
    seccionTercera.insertBefore(nuevoH2, nodoSiguiente);
}

/**
 * Utilizando DOM, cuando se haga doble clik sobre el primer párrafo de la página: 
 *      Asigna a todos los párrafos del documento, cuya posición entre los párrafos sea múltiplo de 3(posición física en la página), el estilo establecido para la clase parrafosEspecial(eliminando cualquier otro estilo anteriormente asignado).
 *      Para los elementos de la lista, cambia el color de fondo a los que tengan asignada la clase par.
 */
document.getElementById('cambiaH2').addEventListener('click', cambiarEstilos, false);
function cambiarEstilos() {
    let parrafos = document.getElementsByTagName("p");
    let elementosLi = document.getElementsByClassName("par");
    let encabezado = document.getElementsByTagName('h1')[0];

    for (let i = 0; i < parrafos.length; i++) {
        if ((i + 1) % 3 === 0) {
            parrafos[i].classList = "parrafosEspecial";
        }
    }

    for (let j = 0; j < elementosLi.length; j++) {
        elementosLi[j].classList.add("colorFondoRojo");
    }

    if(encabezado.classList.contains("textoRojo")){
        encabezado.classList.remove("testoRojo");
        encabezado.classList.add("textoNegro");
    }else{
        encabezado.classList.remove("textoNegro");
        encabezado.classList.add("textoRojo");
    }
    
   document.getElementById('cambiaH2').removeEventListener('dblclick', cambiarEstilos);
}

//añadir elemento nuevo al h1


   

let nuevoElemento = document.createElement("div");
nuevoElemento.id = "infoEvento";
nuevoElemento.textContent = "Posición del puntero:";

let h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", nuevoElemento);



document.body.addEventListener('mousemove', muestraPuntero);//document.body en lugar de document.getelementbytag, este ultimo no devuelve el elemento, sino una coleccion

function muestraPuntero(event) {
    let info = document.getElementById("infoEvento");

    info.textContent =
        "Pantalla → X: " + event.screenX + " | Y: " + event.screenY +
        "   |   Página → X: " + event.pageX + " | Y: " + event.pageY;
}



document.body.addEventListener('keydown', function (event) {
    alert("Tecla: " + event.key + "\n" + "keyCode: " + event.keyCode);
});


