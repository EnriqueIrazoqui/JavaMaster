'use strict'
//var define una variable global
//let define una variable que solo se puede usar en un bloque en especifico osease local

//pruebas let y var
alert("halo");
console.log("halo");

//prueba con var

var numero = 40;
console.log(numero); //numero 40

if(true){
 var numero = 50;
    console.log(numero); //numero 50
}

console.log(numero);

//prueba con let
var texto = "Curso de JS";
console.log(texto); //JS

if(true){
    let texto = "Curso master de PHP";
    console.log(texto); //php
}
console.log(texto);

