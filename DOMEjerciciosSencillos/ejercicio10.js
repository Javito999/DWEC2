function cambiarTexto() {
    // Seleccionamos el botón que disparó el evento (podríamos usar 'this' si el evento se adjuntara de otra forma,
    // pero como está inline, lo buscamos por ID o asumimos su contexto)
    const boton = document.getElementById('botonCambiar');

    if (boton) {
        // Encontramos el div padre del botón (elemento .caja)
        const divPadre = boton.closest('.caja'); // .closest() busca hacia arriba en el árbol DOM

        if (divPadre) {
            // Dentro del div padre, buscamos el primer párrafo
            const parrafoEnCaja = divPadre.querySelector('p');

            if (parrafoEnCaja) {
                parrafoEnCaja.textContent = "Texto cambiado por el botón.";
                console.log("Texto del párrafo en la primera caja cambiado por el botón.");
            } else {
                 console.log("No se encontró párrafo dentro del div padre del botón.");
            }
        } else {
             console.log("No se encontró el div '.caja' padre del botón.");
        }
    } else {
         console.log("Botón 'botonCambiar' no encontrado.");
    }
}