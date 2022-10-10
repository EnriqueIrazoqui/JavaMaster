'use strict'
// transformacion de textos
var numero = 20;
var texto = "Enrique Irazoqui";
var texto2 = " Nombre personal: ";

var dato = numero.toString();
var dato1 = texto.toUpperCase();
var dato2 = texto2.toLocaleLowerCase();

console.log(typeof dato1);
console.log(dato1);
console.log(dato2);

//calcular longitud de texto
var nombre = "Enrique";
var nombre2 = ["Hola","Hola"]

console.log(nombre.length);
console.log(nombre2.length);

//concatenar o unir textos
var textoTotal = texto2 + texto;
var textoTotal1 = texto2.concat(texto)
console.log(textoTotal);
console.log(textoTotal);

//busqueda dentro de cadenas
var busqueda =  texto.indexOf("Enrique");
var busqueda1 =  texto.lastIndexOf("Irazoqui");
var busqueda3 = texto.search("rique");
var busqueda4 = texto.match("nrique");
var busqueda5 = texto.substring(0,6)
var busqueda6 = texto.charAt(6);
var busqueda7 = texto.startsWith("Enrique");
var busqueda8 = texto.endsWith("zoqui");
var busqueda9 = texto.includes("Enrique");

console.log(busqueda);
console.log(busqueda1);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(busqueda9);

//reemplazar o cortar textos
var search = texto2.replace("Nombre", "Hobo")
var search1 = texto2.slice(4);
var search2 = texto2.split(" ");
var search3 = texto2.trim();

console.log(search);
console.log(search1);
console.log(search2);
console.log(search3);