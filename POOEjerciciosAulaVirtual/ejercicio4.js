/*
Crea una clase Empleado con 5 propiedades cualesquiera, entre ellos tipo de empleado. La
clase tendrá un método estático que devolverá los posibles valores de tipo de empleado
"programador junior", "programador senior" y "analista-programador"
*/

class Empleado{

    constructor(nombre, apellido, direccion, ciudad, tipoEmpleado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.tipoEmpleado = tipoEmpleado;
    }

    //getters y setters
    getNombre(){
        return this.nombre;
    }
    setNombre(nombreEmpleado){
        this.nombre = nombreEmpleado;
    }
    
    getApellido(){
        return this.apellido;
    }
    setApellido(apellidoEmpleado){
        this.apellido = apellidoEmpleado;
    }

    getDireccion(){
        return this.direccion;
    }
    setDireccion(direccionEmpleado){
        this.direccion = direccionEmpleado;
    }

    getCiudad(){
       return this.ciudad;

    }
    setCiudad(ciudadEmpleado){
        this.ciudad = ciudadEmpleado;
    }

    getTipoEmpleado(){
        return this.tipoEmpleado;
    }
    setTipoEmpleado(puestoEmpleado){
        this.tipoEmpleado = puestoEmpleado;
    }

    static tipoEmpleado(){
        return ["programador junior", "programador senior" , "analista-programador"];
    }


}
let empleado1 = new Empleado('javito', 'garcia', 'reyes', 'salamanca', '');

alert(Empleado.tipoEmpleado());

empleado1.setTipoEmpleado('programador junior');

alert(empleado1.getTipoEmpleado());

