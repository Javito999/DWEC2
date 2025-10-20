function nuevoCliente(){

    const url = 'http://localhost:3000/clientes';

    let nombre = document.getElementById

    let creaCliente = {

    }

    let init = {
        method: 'POST',
        body: JSON.stringify(creaCliente),
        headers: {'Content-Type': 'application/json'}
    }

    fetch(url, init)
    .then(response => response.json())
    .then(datosAnimales=> JSON.stringify(datosAnimales))
    .catch(err=>console.error(err));



}

function mostrarClientes(cliente){

    let td = document.getElementsByTagName("table")[0];
    td.innerHTML = "";

    cliente.forEach(element => {
        const newCliente = document.createElement("td");
        newCliente.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.dni}</td>
            <td>${cliente.fechaNacimiento}</td>
            <td>${cliente.sexo}</td>
            <td>${cliente.preferencias}</td>
        `;
        td.appendChild(newCliente);
    });
}

