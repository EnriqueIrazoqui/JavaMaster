'use strict'

//arrays sencillos

var nombres = ["Victor lopez","Enrique Irazoqui", "Fernando galvan","Sergio mejorado"];
var lenguajes = new Array("PHP", "JS", "GO", "Java");

var elemento = parseInt(prompt("Que elemento del array quieres?",0));

if(elemento >= nombres.length){
    alert("Introduce el numero correcto " + nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}


console.log(nombres[1]);
console.log(lenguajes);
console.log(nombres.length);

document.write("<h2>Lenguajes de programacion del 2018 </h>");
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>");
    
}

lenguajes.forEach((elemento, indice) => {
    document.write("<li>"+"indice: "+indice+" "+elemento+"</li>");
    
});