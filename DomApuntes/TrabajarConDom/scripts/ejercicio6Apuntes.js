
let parrafo2Original = null;
let parrafo5Original = null;

function elementoH2() {
    
    let parrafos = document.querySelectorAll("div > p");
    let contenedor2 = parrafos[1].parentElement;
    let contenedor5 = parrafos[4].parentElement;

   if (!parrafo2Original && !parrafo5Original) {
        parrafo2Original = parrafos[1];
        parrafo5Original = parrafos[4];
    }
    


    if (contenedor2.contains(parrafo2Original) && contenedor5.contains(parrafo5Original)) {
       
        let nuevoparrafo2 = document.createElement("p");
        let nuevoParrafo5 = document.createElement("p");

        contenedor2.replaceChild(nuevoparrafo2, parrafo2Original);
        contenedor5.replaceChild(nuevoParrafo5, parrafo5Original);
    } else {
       
        let actual2 = contenedor2.querySelectorAll("p")[1]; 
        let actual5 = contenedor5.querySelectorAll("p")[4];

         contenedor2.replaceChild(parrafo2Original, actual2);
         contenedor5.replaceChild(parrafo5Original, actual5);
    }

  
    let inputs = document.querySelectorAll("input[type='text']");
    //devuelve una NodeList, para modificarla individualmente hay que
    //usar un bucle
    for (let i = 0; i < inputs.length; i++) {
        let valorActual = parseInt(inputs[i].getAttribute("size"));
        inputs[i].setAttribute("size", valorActual + 5);
    }
    console.log(inputs);
}
function quitaAtributoName(){

    let escogeSexo = document.querySelectorAll("input[type='radio']");/*De nuevoi
    me devuelve una lista que no puedo modivicar a todos a la vez,
    bucle para ello*/ 

    escogeSexo.forEach(input=>{
        input.removeAttribute("name");
    })

    console.log(escogeSexo);
    //al quitarle el atributo 'name' se quedan marcados ambos
    //en lugar de elegir uno
}
function anhadeAtributoName(){

    let escogeSexo = document.querySelectorAll("input[type='radio']");

    escogeSexo.forEach(input=> {
        input.setAttribute('name', 'escoge')
    })

    console.log(escogeSexo);
}