function recuperarDatos() {
    fetch("https://jsonplaceholder.typicode.com/users") 
 .then(response => response.json()) 
 .then(datosUsuarios => mostrarDatos(datosUsuarios)) 
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
