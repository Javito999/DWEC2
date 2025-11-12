/*
 Crea una página con dos botones “Aviso” y “Parar Aviso”. Al hacer click en “Aviso”, 
comenzará a mostrar, cada 5 segundos, un alert con el texto “Este sábado a las 3 son las 2”. 
Al pulsar el botón “Parar aviso” dejará de mostrarse el aviso.*/ 


document.getElementById('aviso').addEventListener('click', iniciaAviso, false);



function iniciaAviso(){

let intervalo = setInterval(()=>{
alert('Este sábado a las 3 son las 2');
}, 1000);
};

document.getElementById('paraAviso').addEventListener('click', paraTimer, false);

function paraTimer(){

    

};