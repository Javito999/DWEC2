function cargaPaises(){

    fetch('http://localhost:3000/paises')
    .then(response=>response.json())
    .then(paises=>muestraPaisesEnSelect(paises))
    .catch(error=>alert(error))


}

function muestraPaisesEnSelect(paises){

    let selectPais = document.getElementById('selectPais');
    selectPais.innerHTML = '<option value="">Selecciona un país</option>';//limpia el select

     paises.forEach(pais=> {

        let option = document.createElement('option');
        option.value = pais.nombre;
        option.textContent = pais.nombre;
        selectPais.appendChild(option);
 });
}

function cargaCiudades(){

    fetch('http://localhost:3000/ciudades')
    .then(response=>response.json())
    .then(ciudades=>muestraCiudadesEnSelect(ciudades))
    .catch(error=>console.log(error))
}

function muestraCiudadesEnSelect(ciudades){

    let selectCiudad = document.getElementById('selectCiudad');

    selectCiudad.innerHTML = '<option value="">Selecciona una ciudad</option>';//limpia el select

     ciudades.forEach(ciudad=> {

        let option = document.createElement('option');
        option.value = ciudad.nombre;
        option.textContent = ciudad.nombre;
        selectCiudad.appendChild(option);
 });



}