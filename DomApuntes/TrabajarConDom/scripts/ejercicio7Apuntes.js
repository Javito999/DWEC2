let parrafo = document.querySelectorAll('p');


parrafo.forEach(element => {
    element.classList.add("parrafosNormal")
});

function asignaParrafos(){

parrafo.forEach(element=>{

    
    element.classList.add("parrafosEspecial")
});

}
console.log(parrafo);


