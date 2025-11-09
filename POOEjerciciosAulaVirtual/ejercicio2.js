/*
Implementa un solución para el siguiente supuesto:
a. Crea una clase Cuenta con las propiedades ingreso, reintegro y transferencia. La
clase contendrá un constructor con parámetros y los métodos getters y setters.
b. Crea una página web con un botón, que cada vez que se pulse desencadenará la
siguiente acción:
i. Pedirá al usuario por pantalla cantidad a ingresar. Dicha cantidad se
almacenará como valor numérico.
ii. Preguntará al usuario si la cantidad introducida es para ingresar o para
realizar una transferencia.
iii. En caso de ingreso almacenará el valor en ingreso y lo sumará a lo que haya
en el campo reintegro.
iv. En caso de transferencia restará dicho valor a reintegro y lo almacenará en
transferencia.
c. Recuerda hacer un tratamiento de errores en caso de que se produzcan

*/

class Cuenta{
    constructor(ingreso, reintegro, transferencia){
        this.ingreso = ingreso;
        this.reintegro = reintegro;
        this.transferencia = transferencia;
    }
    getINgreso(){
        return this.ingreso;
    }
    setIngreso(valor){
        this.ingreso = valor;
    }

    getReintegro(){
        return this.reintegro;
    }
    setReintegro(valor){
        this.reintegro = valor;
    }

    getTransferencia(){
        return this.transferencia;
    }
    setTransferencia(valor){
        this.transferencia = valor;
    }
}

let cuenta = new Cuenta(0, 1000, 0);

function desencadena(){

    let ingreso = Number(prompt('Indique la cantidad a ingresar'));

    if (isNaN(ingreso) || ingreso <= 0) {
        alert("Introduzca una cantidad numerica");
        return;
    }

    let pregunta = prompt('Es para ingresar o realizar una transferencia');

    if(pregunta === "ingreso"){

        cuenta.setReintegro(ingreso);
        //lo sumo al reintegro (cantidad total de la cuenta)
        cuenta.setReintegro(cuenta.getReintegro() + ingreso);
    }if(pregunta === "transferencia"){

        cuenta.setTransferencia(ingreso);

        cuenta.setReintegro(cuenta.getReintegro() - ingreso);
        
        alert(`Transferencia realizada. Su saldo es ${cuenta.getReintegro()}`);
    }

}