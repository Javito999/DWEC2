/*
3. Crea una clase Libro con las propiedades nombre, ISBN, fechaPubli y prestado(tomará los
valores true o false) y los métodos préstamo, devolución y toString. La clase contendrá,
además, un constructor con parámetros y los métodos getters y setters. El método toString
devolverá la cadena “El libro XXXXX con ISBN XXXXX está prestado/disponible” donde se
mostrará prestado o disponible dependiendo del valor de la propiedad prestado*/ 

class Libro{

    constructor(nombre, ISBN, fechaPubli, prestado = false){
        this.nombre = nombre;
        this.ISBN = ISBN;
        this.fechaPubli = fechaPubli;
        this.prestado = prestado;
    }
    //getters y setters

    getNombre(){
        return this.nombre;
    }
    setNombre(nombreLibro){
        this.nombre = nombreLibro;
    }

    getISBN(){
        return this.ISBN;
    }
    setISBN(numISBN){
        this.ISBN = numISBN;
    }

    getFechaPubli(){
        return this.fechaPubli
    }
    setFechaPubli(fechaDePubli){
        this.fechaPubli = fechaDePubli;
    }
    getPrestado(){
        return this.prestado;
    }
    setPrestado(valor){
        this.prestado = valor;
    }

    //metodos

     prestamo(){
        this.prestado = true;
    }

     devolucion(){
        this.prestado = false;
    }

    toString(){
        let estado = this.prestado ? 'prestado' : 'disponible';
        return `El libro ${this.nombre} con ISBN ${this.ISBN} está ${estado}`;
    }

}
let libro1 = new Libro("Tao Te Ching", "123-456-789", "1605-01-16", false);

alert(libro1.toString());  


