'use strict'
/* Todos los numeros dividores por el numero que el usuario digito*/
var numero1 = parseInt(prompt("Ingrese el primer numero",0));


for (let i = 0; i <= numero1; i++) {
    if(numero1 % i == 0){ 
    console.log("Divisores son "+i);
    }    
}