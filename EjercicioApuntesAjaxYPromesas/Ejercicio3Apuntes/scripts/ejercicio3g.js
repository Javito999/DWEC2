function borrarUsuario(){

   fetch('https://jsonplaceholder.typicode.com/todos/32', {
    method: 'DELETE',
}).then(response => {
      alert("Código de respuesta: "+ response.status); // 👈 aquí ves el código (200, 404, etc.)
      
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status);
      }
      return response.json();
    })
.then(usuarioModificado => mostrarDatos(usuarioModificado))
.catch(err=>console.error(err));
}

function mostrarDatos(infoPosts) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  
    let newPost = document.createElement("tr");
    newPost.innerHTML = `
                
                <td>${infoPosts.userId}</td>
                <td>${infoPosts.id}</td>
                <td>${infoPosts.title}</td>
                <td>${infoPosts.completed}</td>`;
    tbody.appendChild(newPost);
  
}
