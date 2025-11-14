/*Comprueba si en una cadena de caracteres alfanuméricos, pedida por pantalla al 
usuario, hay 10 dígitos seguidos cualesquiera.*/ 
let texto = prompt('Introduzca una cadena de caracteres alfanuméricos');

let expresReg = new RegExp();

let expr = \w{10};

console.log(expr.exec(texto));

/*
Lo mismo que en el punto anterior pero que el patrón buscado esté al final de la 
cadena. */
 let expr1 = \w{10}$;
console.log(expr1.match(texto));
 /*
  Comprueba que una fecha tiene el formato DD-MM-AAAA o DD-MM-AA. Haz las 
comprobaciones para las fechas 11-11-2020, 11-11-20 y 11/11/2020.
 */ 
let formato1 = [0-9]{2}{1,31}(-)[0-9]{2}{1,12}(-)[0-9]{4}{0,9999};