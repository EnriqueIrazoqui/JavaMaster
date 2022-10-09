'use strict'
/*Mostrar todos los numeros impares introducidos por el usuario*/

var numero1 = parseInt(prompt("Ingrese el primer numero",0));
var numero2 = parseInt(prompt("Ingrese el segundo numero",0));

document.write("<h1>"+"De"+numero1+"a"+numero2+"</h1>");

for (let i = numero1; i <= numero2; i++) {
    if(i % 2 != 0){
        document.write(i+"<br>");
    }
    
}