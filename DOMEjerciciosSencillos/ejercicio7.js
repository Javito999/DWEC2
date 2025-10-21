function mostrarEntrada(){

    let input = document.getElementById('entradaUJsuario');

    let parrafo = document.getElementById('textoMostrado');

    const textoUsuario = input.value;

    parrafo.textContent = "Esto estaba aquí " + textoUsuario;



}