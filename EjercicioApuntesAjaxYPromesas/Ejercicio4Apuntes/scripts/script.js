function buscaAnimal(){

  let animalSeleccionado = document.getElementById("opcion").value;
  const url = 'http://localhost:3000/animales';

    fetch(url)
    .then(response => response.json())
    .then(datosAnimales=>{
      let filtrados = datosAnimales.filter(a=> a.Tipo === animalSeleccionado);
      mostrarAnimales(filtrados);

    })
      
    .catch(err=>console.error(err));

}

function mostrarAnimales(animales) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  animales.forEach(a => {
    const newPost = document.createElement("tr");
    newPost.innerHTML = `
                
                
                <td>${a.Nombre}</td>
                <td>${a.Rasgos}</td>`;
    tbody.appendChild(newPost);
  });
}