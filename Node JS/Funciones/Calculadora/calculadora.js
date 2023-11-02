//Ejemplo de exportación de funciones 

const suma = function (a,b){
    return a+b;
}

const resta = function (a,b){
    return a-b
}

const multiplicacion = function (a,b){
    return a*b
}

const division = function (a,b){
    if (b!=0){
        return a/b
    } 
    else {
        console.log(`No es posible dividir entre 0`)
    }
}

//Exportar modulo

module.exports={
    suma,
    resta,
    multiplicacion,
    division,
}