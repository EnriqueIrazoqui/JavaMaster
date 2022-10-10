'use strict'

var texto = "Hola mundo soy una variable global";
var numero = 5;

function HolaMundo(texto){
    var hola_mundo ="Texto de funcion";
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

HolaMundo(texto);
