function nuevoCliente() {

    const url = 'http://localhost:3000/clientes';

    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let dni = document.getElementById("dni").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let sexo = document.querySelector('input[name="sexo"]:checked')?.value;

    let preferenciasSeleccionadas = Array.from(
        document.querySelectorAll('input[name="preferencias"]:checked')
    ).map(elem => elem.value).join("_");

    let creaCliente = {
        nombre,
        apellidos,
        dni,
        fechaNacimiento,
        sexo,
        preferencias: preferenciasSeleccionadas
    };

    let init = {
        method: 'POST',
        body: JSON.stringify(creaCliente),
        headers: { 'Content-Type': 'application/json' }
    };

    fetch(url, init)
        .then(response => response.json())
        .then(datosCliente => {
            
            mostrarClientes([datosCliente]);
        })
        .catch(err => console.error(err));
}


function mostrarClientes(clientes) {

    let tabla = document.querySelector("#tablaClientes tbody");
    tabla.innerHTML = "";

    clientes.forEach(element => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${element.id}</td>
            <td>${element.nombre}</td>
            <td>${element.apellidos}</td>
            <td>${element.dni}</td>
            <td>${element.fechaNacimiento}</td>
            <td>${element.sexo}</td>
            <td>${element.preferencias}</td>
        `;
        tabla.appendChild(fila);
    });
}


function borrarCliente() {
    let dni = document.getElementById("dni").value.trim();

    if (!dni) {
        alert("Introduce un DNI para borrar");
        return;
    }

    // Primero buscamos el cliente por DNI
    fetch(`http://localhost:3000/clientes?dni=${dni}`)
        .then(response => response.json())
        .then(datos => {
            if (datos.length === 0) {
                alert("No existe cliente con ese DNI");
                return;
            }

            let id = datos[0].id; // Obtenemos el ID interno del json-server
            let URL = `http://localhost:3000/clientes/${id}`;

            let init = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            };

            fetch(URL, init)
                .then(response => {
                    if (response.ok) {
                        alert('Cliente con DNI ' + dni + ' borrado correctamente');
                    } else {
                        alert('Error al borrar cliente');
                    }
                })
                .catch(err => console.log(err));
        });
}


function actualizarCliente() {
    let dni = document.getElementById("dni").value.trim();

    if (!dni) {
        alert("Introduce un DNI para actualizar");
        return;
    }

    fetch(`http://localhost:3000/clientes?dni=${dni}`)
        .then(response => response.json())
        .then(datos => {
            if (datos.length === 0) {
                alert("No existe cliente con ese DNI");
                return;
            }

            let id = datos[0].id;
            let URL = `http://localhost:3000/clientes/${id}`;

            let nombre = document.getElementById("nombre").value.trim();
            let apellidos = document.getElementById("apellidos").value.trim();
            let fechaNacimiento = document.getElementById("fechaNacimiento").value;
            let sexo = document.querySelector('input[name="sexo"]:checked')?.value;

            let preferenciasSeleccionadas = Array.from(
                document.querySelectorAll('input[name="preferencias"]:checked')
            ).map(elem => elem.value).join("_");

            let clienteActualizado = {
                nombre,
                apellidos,
                dni,
                fechaNacimiento,
                sexo,
                preferencias: preferenciasSeleccionadas
            };

            let init = {
                method: 'PUT',
                body: JSON.stringify(clienteActualizado),
                headers: { 'Content-Type': 'application/json' }
            };

            fetch(URL, init)
                .then(response => response.json())
                .then(actualizado => {
                    alert('Cliente con DNI ' + dni + ' actualizado correctamente');
                })
                .catch(err => console.error(err));
        });
}
