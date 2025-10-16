function buscaAnimal(){

    fetch("https://localhost:3000/animales")
    .then(response => response.json())
    .then(datosAnimales=>console.log(datosAnimales))
    .catch(err=>console.error(err));

}

function mostrarAnimales(infoPosts) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  infoPosts.forEach((animales) => {
    const newPost = document.createElement("tr");
    newPost.innerHTML = `
                
                <td>${animales.id}</td>
                <td>${animales.Tipo}</td>
                <td>${animales.Nombre}</td>
                <td>${animales.Observacion}</td>`;
    tbody.appendChild(newPost);
  });
}