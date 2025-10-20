function verAnimales(){

  const url = 'http://localhost:3000/animales';

    fetch(url)
    .then(response => response.json())
    .then(datosAnimales=> mostrarAnimales(datosAnimales))
      
    .catch(err=>console.error(err));

}

function mostrarAnimales(animales) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  animales.forEach(a => {
    const newPost = document.createElement("tr");
    newPost.innerHTML = `
                
                
                <td>${a.Nombre}</td>`;
    tbody.appendChild(newPost);
  });

}
function creaAnimal(){

     const url = 'http://localhost:3000/animales';
    let nuevoAnimal = {
        id: "17",
        Tipo: "pajaro",
        Nombre: "periquito",
        Observacion: "es rojo",
        Ubicacion: "en el árbol",
        Rasgos: "es muy cansino",
        Imagen: "https://www.bing.com/images/search?q=imagen+periquito&form=HDRSC3&first=1"
    }

    let init = {
        method: 'POST',
        body: JSON.stringify(nuevoAnimal),
        headers: { 'Content-Type': 'application/json'}

    }

    fetch(url, init)
    .then(response => response.json())
    .then(datosAnimales=> JSON.stringify(datosAnimales))
    .catch(err=>console.error(err));




}




