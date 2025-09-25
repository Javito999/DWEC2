function operaciones(){

let num1 = parseInt(prompt("Introduzca un número"));
let num2 = parseInt(prompt("Introduzca el segundo numero"));

alert(num1*num2);

if(num2 != 0){
    alert(num1/num2);
}

alert(num1-num2);

alert((num1*num1)-(num2*num2));

if(num1 < 0){
    num1 = null;
}else if(num1 > 0){
    alert(num1);
}
if(num2 < 0){
    num2 = null;
}else
    alert(num2);

}
operaciones();