'use strict'

//bucle for
//bucle estructura de control que se repite hasta donde tu digas
 
var numeros = 100;
for(var i = 0; i <= numeros; i++){
    console.log("Vamos por el numero "+i);  
   // debugger;
}

//bucle while
var year = 2018;
while (year != 1991) {
    console.log("Estamos en el año: "+year);


    if (year == 2000) {
        break;
    }
    year--;
}

//bucle do while
var years = 30;

do {
    alert("Solo cuando es diferente al 20");
    years--;
    
} while (years > 25);