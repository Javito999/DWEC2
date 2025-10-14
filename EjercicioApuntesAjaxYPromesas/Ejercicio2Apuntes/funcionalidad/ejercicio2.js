function recuperarDatos() {
    fetch("https://jsonplaceholder.typicode.com/uses") 
 .then(response => {
if (response.ok) { return response.json();
} else {
return "Error HTTP:"+response.status+"("+ response.statusText + ")";
}
}) 
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
