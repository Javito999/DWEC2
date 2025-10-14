function recuperarDatos() {
  fetch("https://jsonplaceholder.typicode.com/use") 
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        
        mostrarEstado(response.status, response.statusText);

        return null;
      }
    })
    .then(datosUsuarios => {
      if (datosUsuarios) {
        mostrarDatos(datosUsuarios);
      }
    })
    .catch(error => {
      console.error(error);
      mostrarEstado("Error de red", error.message);
    });
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


function mostrarEstado(codigo, texto) {
  const estadoDiv = document.getElementById("estado");
  if (estadoDiv) {
    estadoDiv.textContent = "Estado: " + codigo + " " + texto;
  }
}
