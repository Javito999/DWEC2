/*
Crea una clase Persona. Tendrá los atributos nombre, apellidos, fechaNacimiento que será
un objeto de tipo Fecha(clase creada en el ejercicio 5 de los apuntes) y dni que será de tipo
NIF(Clase creada en el ejercicio 5
*/ 
class Persona{

    constructor(nombre, apellidos, fechaNacimiento,dni){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }


    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getApellido(){
        return this.apellidos;
    }
    setApellidos(apellidos){
        this.apellidos = apellidos;
    }
    getFechaNacimiento(){
        return this.fechaNacimiento = this.fechaNacimiento;
    }
    setFechaNacimiento(fechaNacimiento){
        this.fechaNacimiento = fechaNacimiento;
    }
    getDni(){
        return this.dni;
    }
    setDni(dni){
        this.dni = dni;
    }

    toString(){
        return `Persona: ${this.nombre} ${this.apellidos} `;
    }




}