//calculadora de cuotas

//consignas
//hacer un if, un bucle y poner funciones todo junto.


let nPrecio = Number(prompt("Ingrese el precio del producto."))
let nCuotas = Number(prompt("Ingrese la cantidad de cuotas."))

//algoritmo condicional if

//function numero (precio, cuotas) {
if(nPrecio != "" && nCuotas != ""){
    alert(`El precio es ${nPrecio} y lo quiere pagar en ${nCuotas} cuotas.`);
}else{
    alert("Todos los campos son obligatorios.")
}


//algoritmo con bucle 


    for(let cuotas = 3; cuotas <=18; cuotas++){
    if(cuotas === 3){
        return precio * 1.25
        break;
    }else if (cuotas === 6) {
        return precio * 1.50
        break;
    }else if (cuotas === 9) {
        return precio * 1.75
        break;
    }else if (cuotas === 12){
        return precio * 2
        break;
    }else if (cuotas === 18){
        return precio * 2.5
        alert(`El precio de este producto es de ${recio}`)
    }else{
        alert("No está disponible el número de cuotas que usted quiere ingresar.")
    }
    
    }















































