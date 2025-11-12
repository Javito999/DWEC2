const { createElement } = require("react");

window.onload = function () {
  document
    .getElementById("tablaDatos")
    .addEventListener(
      "click",
      crearNuevaFila.bind(document.getElementById("tablaDatos")),
      false
    );
};
//Ejemplo Punto 1.7 de los apuntes
function crearNuevaFila() {
  let numFilas = this.childElementCount;
  let fila = document.createElement("tr");
  fila.setAttribute("id", numFilas);
  for(let i = 0; i <= 2; i++){
    let celda = document.createElement("td");
    celda.innerText = numFilas + i;
    fila.appendChild(celda);
  }

  
  this.appenChild(fila);
  document.getElementById(numFilas).addEventListener(
    "click",
    (event) => {
      alert("Id: " + event.currentTarget.id);
      event.stopPropagation();
    },
    false
  );
}
