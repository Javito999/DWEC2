/*Comprueba si en una cadena de caracteres alfanuméricos, pedida por pantalla al 
usuario, hay 10 dígitos seguidos cualesquiera.*/ 
let texto = prompt('Introduzca una cadena de caracteres alfanuméricos');

let expresReg = new RegExp();

let expr = /\w{10}/;

console.log(expr.exec(texto));

/*
Lo mismo que en el punto anterior pero que el patrón buscado esté al final de la 
cadena. */
 let expr1 = /\w{10}$/;
console.log(expr1.match(texto));
 /*
  Comprueba que una fecha tiene el formato DD-MM-AAAA o DD-MM-AA. Haz las 
comprobaciones para las fechas 11-11-2020, 11-11-20 y 11/11/2020.
 */ 
let formato1 = /^\d{2}-\d{2}-(\d{2}|\d{4})$/;

let fechas = ["11-11-2020", "11-11-20","11/11/2020" ];

fechas.forEach(fecha=>{
  if(formato1.test(fecha)){
    console.log(`${fecha}: formato correcto`);
  }else{
    console.log(`${fecha}: formato incorrecto`)
  }
}
);

/*
d. Desarrolla el código necesario para validar una dirección de correo electrónico
pedida al usuario. Se ha de validar que su dominio sea ’es’, ‘com’, ‘net’ u ‘org’. Se
mostrará por consola si se trata de una dirección válida o no.*/ 

let direccion = prompt('Introduzca su dirección de email');

let expReg = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.(com|es|net|org)$/;


if(expReg.test(direccion)){
  alert(`La dirección de correo ${direccion} es válida`)
}else {
  alert(`La dirección ${direccion} no es válida`)
};

/* Crea un patrón que busque en el texto “Paca llevaba una vaca en la baca que se hizo
caca” las palabras paca, vaca, baca y caca. No se diferenciará entre mayúsculas y
minúsculas. Utilizando el método correcto, muestra por consola todas las
coincidencias encontradas, que serán devueltas por dicho método en un array*/

let cadena = "Paca llevaba una vaca en la baca que se hizo caca";

let expresion = /(paca|vaca|baca|caca)/gi;

let resultado = cadena.match(expresion);

console.log(resultado);

/*Crea un patrón para validar un DNI (sin tener en cuenta si la letra es o no la correcta),
que se pedirá al usuario */

let dameDni = prompt('Introduzca su dni');
let patronDni = /^[0-9]{8}-[A-Z]$/;

if(patronDni.test(dameDni)){
  alert('Dni connrecto')
}else{
  alert('Dni incorrecto');
};
























