'use strict'
/*plantillas de texto */

var nombre = prompt("Digita tu nombre","");
var apellido = prompt("Mete tus apellidos","");


var texto = `
<h1>Hola que tal </h1>
<h3>Mi nombres es :${nombre} mis apellidos son ${apellido} </h3>`;

document.write(texto);