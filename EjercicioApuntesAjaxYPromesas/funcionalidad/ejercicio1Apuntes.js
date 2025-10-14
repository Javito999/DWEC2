function recuperarDatos() {
    fetch("https://jsonplaceholder.typicode.com/users") //devuelve una promesa 
 .then(response => response.json()) //El método json() devuelve otra promesa 
 .then(datosUsuarios => mostrarDatos(datosUsuarios)) //then() de la segunda promesa 
 .catch(error => console.error(error));  
}


function mostrarDatos(infoPosts) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  infoPosts.forEach((usuario) => {
    const newPost = document.createElement("tr");
    newPost.innerHTML = `
                
                <td>${usuario.name}</td>
                <td>${usuario.email}</td>`;
    tbody.appendChild(newPost);
  });
}
