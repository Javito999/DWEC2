function recuperarDatos() {
    fetch("https://jsonplaceholder.typicode.com/todos/55") 
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
                
                <td>${usuario.userId}</td>
                <td>${usuario.id}</td>
                <td>${usuario.title}</td>
                <td>${usuario.completed}</td>`;
    tbody.appendChild(newPost);
  });
}
