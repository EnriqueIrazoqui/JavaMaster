'use strict'

//parametros REST y SPREAD

function listaFrutas(fruta1,fruta2,...restoFrutas) {
    console.log(fruta1);
    console.log(fruta2);
    console.log(restoFrutas);
}

listaFrutas("naranja","sandia","limon","manzana","coco","melon");

var frutas = ["naranja","sandia"];

listaFrutas(...frutas,"naranja","sandia","limon","manzana","coco","melon");