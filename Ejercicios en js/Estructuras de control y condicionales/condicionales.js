'use strict'

var edad1 = 30;
var edad2 = 10;
var edad3 = 33;
var nombre = "Enrique Irazoqui";

//condicional if
if (edad1>edad2) {
    console.log("Edad uno es mayor que edad dos");
}else{
    console.log("La edad 1 es inferior");
}
//operadores relacionales
/*
    Menor que <
    Mayor que >
    Mayor igual >=
    Menor igual <=
    Igual ==
    Distinto !=
*/

if (edad3 >= 18) {
    console.log(nombre+" Tiene "+edad3+" Es mayor de edad");
    if (edad3 <= 33) {
        console.log(nombre+" Todavia es milenial");
    }else if(edad >= 70){
        console.log("Ya no eres milenial");
    }
}else{
    console.log(nombre+" Es menor de edad");
}

//operadores logicos
/*
    AND (y) &&
    OR (0) ||
    Negacion !=
*/

var year = 2018;
//Negacion
if (year != 2016) {
    console.log("No es el año 2016, realmente el año es"+year);
}

//AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//OR
if (year ==  2020 || (year >= 2018 && year==2028)) {
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}