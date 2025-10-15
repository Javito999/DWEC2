let nuevaTarea = {
    
    userId: 5,
    title: "prueba de post",
    completed: false

};
let init = {
    method: 'POST',
    body: JSON.stringify(nuevaTarea),
    Headers: {'Content-Type': 'application/json'}
}

function recuperarDatos() {
    fetch("https://jsonplaceholder.typicode.com/todos", init) 
 .then(response =>{ console.log(response)
    if(response.status == 201)
        return response.json();
        return "error"; 
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
                
                <td>${usuario.userId}</td>
                <td>${usuario.id}</td>
                <td>${usuario.title}</td>
                <td>${usuario.completed}</td>`;
    tbody.appendChild(newPost);
  });
}
