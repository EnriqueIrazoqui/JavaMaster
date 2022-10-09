'use strict'
/*Mostrar la media y la suma de los reultados hasta que el usuario coloque un numero negativo*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo",0));
    if(isNaN(numero)){
      numero = 0;
    }else if(numero >= 0){
        suma = suma += numero;
        contador++;
    }

    console.log(suma);
    console.log(contador);
    
} while (numero >= 0);

alert("La suma de todos los numeros es "+suma);
alert("La media de todos los numeros es "+(suma/contador));