'use strict'
//switch
var edad = 100;
var imprime = "";

switch (edad) {
    case 18:
            imprime="Acabas de cumplir 18";
        break;
    case 25:
            imprime="Ya eres un adulto";
        break;
    case 40:
            imprime="Crisis de los 40";
        break
    case 70:
            imprime="Eres un anciano";
        break;
    default:
            imprime="Tu edad va mas haya de los limites";
        break;
}

console.log(imprime);