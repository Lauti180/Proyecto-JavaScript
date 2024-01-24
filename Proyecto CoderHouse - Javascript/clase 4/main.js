//function

//palabra reservada de JS que indica una funcion

/*function nombreFuncion(){
    codigo a ejecutar por la funcion 
}

nombreFuncion()


*/

//ejemplo funcion saludar

/*function saludar() {
    console.log("Hola");
}

saludar()*/

/*function saludar() {
    let nombre = prompt("Ingrese su nombre");
    alert(`Hola ${nombre}`);
}

saludar();*/

//funcion con parámetros

/* 
function nombreFuncion(parm1, parm2, parm...,parmN){
    código a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, valor..., valorN)
*/

//lo que hacen los pparametros es que se le pueden poner distintos valores y ejecuta la misma funcion

/*function saludar(saludo, nombre){
console.log(`${saludo} ${nombre}`);
}

let saludo = prompt("Ingrese su saludo");
let nombre = prompt("Ingrese su nombre");


saludar("saludo", "nombre");
saludar("saludo", "nombre");
alert(`${saludo} ${nombre}`);
//se puede usar de esta forma pero es incomodo 
//saludar(let saludo = prompt("Ingrese su saludo"),
//let nombre = prompt("Ingrese su nombre");)
*/

//funcion suma

//usa la palabra RETURN que es una palabra reservada de JS

/*function suma(numeroUno, numeroDos) {
    return numeroUno + numeroDos
}

let resultado = suma(5, 6);
console.log("resultado", resultado);*/

//ejemplo muñeco

/*function armar(partes) {
    return `Muñeco armado con ${partes}`;
}
//me tiene que retornar el muñeco armado

function pintar(munecoArmado) {
    return `${munecoArmado} y pintado`;
}
//me tiene que retornar el muñeco armado y pintado

function vestirGuardar(munecoPintado){
    console.log(`${munecoPintado}, vestido y guardado en bodega`);
}
//ya no me tiene que retornar nada ya que el proceso finalizo 

let munecoArmado = armar("madera");
let munecoPintado = pintar(munecoArmado);
vestirGuardar(munecoPintado);
*/

//ejemplo calculadora

/*function calculadora(numeroUno, numeroDos, operacion) {
switch (operacion) {
    case "+":
    return numeroUno + numeroDos;
    break;

    case "-":
    return numeroUno - numeroDos;
    break;

    case "*":
    return numeroUno * numeroDos;
    break;

    case "/":
    return numeroUno / numeroDos;
    break;

    default:
    return "Operación no válida";
    break;
}
}

let numeroUno = Number(prompt("Ingrese el número uno"));
let numeroDos = Number(prompt("Ingrese el número dos"));
let operacion = prompt("Ingrese su operación");

let resultado = calculadora(numeroUno, numeroDos, operacion);

alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`)
*/


//arrow function estructura 

/*const sumar = (a, b) => {
    return a + b 
};*/

//1 si la funcion no tiene parametros se deja los parentesís vacíos 
//2 si lafuncion tiene un solo parametro se puede quitar los parentesís
//3 si la funcion no tiene llaves ni un return, se hace un return implícito

//ejemplo 1

/*const saludar = () => {
    return "Hola";
};

console.log(saludar());
*/

//ejemplo 2

/*const saludar = nombre => {
    return (`Hola ${nombre}`);
};

console.log(saludar("Lauti"));
*/

//ejemplo 3 

/*const sumar = (x, y) => x + y;
console.log(sumar(5, 6));
*/


//ejemplo iva

/*const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21; 

let precioProducto = 1000;

let descuento = 200;
//precio + iva - descuento
let NuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(NuevoPrecio);
*/


//hacer un if, un bucle y poner funciones todo junto. 
//puede ser un simulador de cuotas, una calculadora, un simulador de tiempo promedio a esperar en un turno








