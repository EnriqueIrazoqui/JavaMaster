'use strict'

var categorias = ['Accion','Terror', 'Comedia'];
var peliculas = ['La vida es bella','Mamalon', 'Gran torino'];

console.log(peliculas.sort());
console.log(peliculas.reverse());

var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);


do {
    var elemento = prompt("Introduce tu pelicula: ","");
    peliculas.push(elemento);
} while (elemento != "ACABAR");

//peliculas.pop();

var indice = peliculas.indexOf('ACABAR');
if(indice > -1){
    peliculas.splice(indice,1);

}

var cadena = peliculas.join();
console.log(cadena);

var cadena1 = "Hola amigos, como ,estan?";
var cadena_array = cadena1.split(", ");


console.log(peliculas);
console.log(cadena_array);

for (let elemento in peliculas) {
   document.write("<ul>"+peliculas[elemento]+"</ul>");
}

//BUSQUEDAS DENTRO DE UN ARRAY
var precios = [10,20,70,80,90,100];
var busqueda2 = precios.some(  precio =>  precio >= 10);

var busqueda = peliculas.find(  pelicula =>  pelicula == "Mamalon");

var busqueda1 = peliculas.findIndex(  pelicula =>  pelicula == "Mamalon");

console.log(busqueda);
console.log(busqueda1);
console.log(busqueda2);