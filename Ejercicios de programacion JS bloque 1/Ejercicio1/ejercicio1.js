'use strict'

/* programa que pida 2 numeros y que diga cual es el mayor menor y si sin iguales*/
/* Su los numeros no son numeros volver a introducir datos*/
//NA not a number

var numero1 = parseInt(prompt("Primer numero",0));
var numero2 = parseInt(prompt("Segundo numero",0));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1)|| isNaN(numero2)){   
numero1 = parseInt(prompt("Primer numero",0));
numero2 = parseInt(prompt("Segundo numero",0));
}

    if (numero1<numero2) {
        console.log("El numero 2 es mayor que el numero uno");
        alert("El numero 2 es mayor que el numero uno");
    }else if(numero2<numero1){
        console.log("Numero 1 es mayor que numero 2");
        alert("Numero 1 es mayor que numero 2");
    }else if (numero1==numero2) {
        console.log("Ambos numeros son iguales");
        alert("Ambos numeros son iguales");
    }else{
        alert("Introduce numero correctos");
    } 



