'use strict'
/*Poner el rango de 2 numeros que ingrese el usuario por ejemplo del 1 al 100 seria del 2 al 99 */

var numero1 = parseInt(prompt("Ingrese el primer numero",0));
var numero2 = parseInt(prompt("Ingrese el segundo numero",0));

document.write("<h1>"+"De"+numero1+"a"+numero2+"</h1>");

for (let i = numero1; i <= numero2; i++) {
   document.write(i+"<br>");
    
}