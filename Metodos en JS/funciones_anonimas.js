'use strict'
//funciones anonimas
/* es una funcion que no tiene nombre*/
/*Funciones de flechas generas funciones de callback mucho mas facil y limpia que las anonimas*/

function sumame (numero1,numero2,sumaYmuestra,sumaPorDos) {
    var sumar = numero1 +   numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}


sumame(5,7,function(dato){
    console.log("La suma es: "+dato);
}, function(dato){
    console.log("La suma por 2 es: "+(dato*2));
});


sumame(5,7, dato => {
    console.log("La suma es: "+dato);
}, dato => {
    console.log("La suma por 2 es: "+(dato*2));
});