    let jugador1 = document.getElementById("jugador1");
    let jugador2 = document.getElementById("jugador2");
  
  
    let juegoTerminado = false;
    let jugadorActual = "x";
    let puntuacionJugadorX = 0;
    let puntuacionJugadorY = 0;   
    //cración del array con bucle

    let arrayBidimensional = new Array(3);

    for(let i = 0; 1 < 3; i++){
        arrayBidimensional[i] = new Array(3);
    }
    

function jugada(i){
    
    if(juegoTerminado || arrayBidimensional[i] !== "")
        return;
    arrayBidimensional[i] = jugadorActual;

    renderizarTablero();

    if(verificaVictoria()){
        actualizarPuntuación();
        resaltarCeldasGanadoras();
        alert('El jugador ' + jugadorActual + ' gana.');
        juegoTerminado = true;
    }else if(arrayBidimensional.every((celda) => celda !== "")){
        alert('Habéis empatao');
        juegoTerminado = true;
    }else {
        jugadorActual = jugadorActual === "x" ? "o" : "x";
        actualizarTurno();
    }
}

function verificaVictoria(){

    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];

for(let i = 0; i < combinacionesGanadoras.length; i++){
    const  [a,b,c] = combinacionesGanadoras[i];

    if(arrayBidimensional[a] !=="" && 
    arrayBidimensional[a] === arrayBidimensional[b] &&
    arrayBidimensional[a] === arrayBidimensional[c]
    ){
        celdasGanadoras = [a, b, c];
    }
return false;
}
}

function reiniciarJuego(){
    arrayBidimensional.fill("");
    jugadorActual = "x";
    celdasGanadoras = [];
    actualizarIndicadorTurno();
    renderizarTablero();
}

function actualizarPuntuación(){
 if(jugadorActual === "x"){
    document.getElementById
    puntuacionJugadorX++;
 }

}

    
    




