//bucle for 

//i++ se refiere a que i = i +1 y asi se incrementa, en este caso hasta que es menor a 100

/*for(let i = 0; i < 100; i++){
    console.log("Hola");
}*/

/*for(let i = 0; i < 100; i--){ CUIDADO BUCLE INFINITO
    console.log("Hola");
}*/


//bucle para multiplicación

/*let numero = Number(prompt("Ingrese un número"));

for(let i = 1; i <= 10; i++){
    let resultado = numero * i;
    //alert("El resultado es" + " " + numero + " x " + i + " = " + resultado); así es otra forma tmb
    alert(`El resultado es ${numero} x ${i} = ${resultado}`)
}*/

// ALT + 9 + 6 = `` hacen esas comillas especiales
//estas comillas (backtips) son especiales y se colocan de la siguiente manera


//de ahora en más voy a usar estas comillas " ``"  

/*let nombre = "lauti";
let saludo = "hola";

console.log(`${saludo} ${nombre}`);*/

//Bucle para pedir turnos en algún lado. EJEMPLO=

//Para que el bucle funcione correctamente se debe poner todo lo que uno desea adentro de él


/*for(let turno = 1; turno <=10; turno++){
let nombre = prompt("Ingrese su nombre");
alert(`Hola ${nombre} su turno# ${turno}`)
}

alert("Turnos agotados.")*/

//break 

//esta palabra reservada de JS permite romper/quebrar un bucle

/*for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}*/


//continue

//esta palabra reservada de JS permite encontrar varios elementos que cumplan una condición

/*for(let i = 0; i <10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}*/


//while

//palabra reservada de JS que permite crear un bucle, pero se distingue porque es por un CONDICIONAL

/*let usuario = prompt("Ingrese su usuario");

while(usuario != "lauti"){
    alert("Usuario incorrecto")

    usuario = prompt("Ingrese su usuario")
}

alert("Bienvenido lauti")*/


//switch 

//palabra reservada de JS que es parecida a la formula de if else if else

/*let moneda = "ars";

switch (moneda) {
    case "ars":
        console.log("Moneda argentina");
        break;
    case "euro":
        console.log("Moneda europea");
        break;
    case "dolar":
        console.log("Moneda norteamericana");
        break;
    default:
        console.log("No hay ninguna moneda");
        break;
}*/

//Actividad para proyecto final. 

/*for(let turno = 1; turno < 10; turno++){
    let DNI = Number(prompt("Ingrese su DNI"))
    alert(`Su DNI es ${DNI} y su turno es #${turno}`)
}*/








