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

function precioFinal (precioFinal) {
    

    for(let cuotas = 3; cuotas <=18; cuotas++){
    if(cuotas === 3){
        alert(`El precio de este producto es de ${nPrecio}`)
        return nPrecio * 1.25
        
    }else if (cuotas === 6) {
        alert(`El precio de este producto es de ${nPrecio}`)
        return nPrecio * 1.50
        
    }else if (cuotas === 9) {
        alert(`El precio de este producto es de ${nPrecio}`)
        return nPrecio * 1.75
        
    }else if (cuotas === 12){
        alert(`El precio de este producto es de ${nPrecio}`)
        return nPrecio * 2
        
    }else if (cuotas === 18){
        alert(`El precio de este producto es de ${nPrecio}`)
        return nPrecio * 2.5
    }else{
        alert("No está disponible el número de cuotas que usted quiere ingresar.")
    }
    
    }
}

let final = alert(precioFinal)












































