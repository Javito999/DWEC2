/*
5. Crea una clase NIF. Los atributos serán el número de DNI y la letra:
a. El constructor recibirá únicamente el número de DNI. Para calcular la letra llamará al
método correspondiente.
b. La clase contendrá un método que calcule la letra del NIF a partir del número de
DNI.
*/ 

class NIF{

    numeroDni = 0;
    letraDni = '';

    constructor(numeroDni){
        this.numeroDni = numeroDni;
    }

    //getter y setter
    getNumeroDni(){
        return this.numeroDni
    }
    setNumeroDni(numero){
        this.numeroDni = numero;
    }

    calculaLetra(numeroDni){
        let secuencia = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let letra = secuencia.split("");
        let resto = numeroDni % 23;
        
        this.letraDni = letra[resto - 1];
         return this.letraDni;
    };



}
let miDni = new NIF(71033558);

let letra = miDni.calculaLetra(miDni.getNumeroDni());

alert(`La letra de su dni es: ${letra}`);