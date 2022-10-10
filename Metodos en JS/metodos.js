'use strict'

//metodos 
//parametros opcionales son los que estan inicializados y de mayoria son flags


function Consola(numero1,numero2) {
    console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+ (numero1-numero2));
        console.log("Multiplicacion: "+ (numero1*numero2));
        console.log("Division: "+(numero1/numero2));
        console.log("*******************");
}
function Pantalla(numero1,numero2) {
    document.write("Suma: "+ (numero1+numero2)+"<br>");
    document.write("Resta: "+ (numero1-numero2)+"<br>");
    document.write("Multiplicacion: "+ (numero1*numero2)+"<br>");
    document.write("Division: "+(numero1/numero2)+"<br>");
    document.write("*******************"+"<br>");
}

function calculadora(numero1,numero2, mostrar = false) {
  
    if(mostrar == false){
        Consola(numero1,numero2);
    }else{
        Pantalla(numero1,numero2);
    }

    return true;
}

 calculadora(12,8);
 calculadora(12,8,true);

 for (let i = 0; i <= 10; i++) {
    console.log(i);
    calculadora(i,8);  
 }
