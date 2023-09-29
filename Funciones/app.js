// Las funciones se declaran mediante la palabra function

//Funciones declaradas

function saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`)
}

saludar("Andres", "28")

//Valor retorno es el valor que devuelve una funcion apenas sea llamada

function sumar(a, b) {
    let resultado
    resultado = a + b;

    return resultado
}

console.log(sumar(53, 10))

// //Funciones expresadas: Hacen parte del ambito local, es decir solo estaran disponibles  una vez la haya creado
// No AuthenticatorResponse, nunca estan disponibles antes de que se creen

/*const NombreFuncion = function(Parametros) {
    Codigo que se desee ejecutar
}*/

const despedir = function () {
    return "Muchas gracias por utilizar el App hasta luego"
}

console.log(despedir())

//Funcion de retorno edad y nombre

const minombre = function (name, old) {
    console.log(`Hola mi mascota se llama ${name} y tiene ${old} de edad`)
}

console.log((minombre("Lluvia", "10")))

//Hacer una calculadora que haga un codigo que haga una función expresada para cada una de las 
//siguientes operaciones

/* 1.Suma
2. Resta
3. Multiplicación
4. División
Para seleccionar la operación que se quiere realizar haga un menu con la estructura de control switch*/


const Suma = function (a, b) {
    let resultado
    resultado = a + b;
    return resultado
}

const Resta = function (a, b) {
    let resultado
    resultado = a - b;
    return resultado
}

const Multiplicacion = function (a, b) {
    let resultado
    resultado = a * b;
    return resultado
}

const Division = function (a, b) {
    let resultado
    resultado = a / b;
    return resultado
}

let option
option=4
numBer1=20
numBer2=30

console.log("Menu calculadora")
console.log("1 para sumar")
console.log("2 para resta")
console.log("3 para Multiplicación")
console.log("4 para division")

switch (option) {
    case 1 :
        
        console.log(`El resultado solicitado es ${Suma(numBer1, numBer2)}`)
        break;
    case 2:
        
        console.log(Resta(numBer1, numBer2))
        break;
    case 3:
       
        console.log(Multiplicacion(numBer1, numBer2))
        break;
    case 4:
       if (numBer2!=0){
        console.log(`El resultado solicitado es ${(Division(numBer1, numBer2))}`)
       } else {
console.log("No es posible Dividir entre cero")
       }
        break;
        default :
        console.log("Opcion no valida")
        break;
}


//Alertas : puede mostrar salidas o información
//let mensaje = prompt ("Hola este es mi primer mensaje")
// Alert (mensaje)

//alert("Esta es mi primera alerta")

//Metodo para pasar de tipo numero a tipo string o caracter
nUmber=1
console.log(nUmber.toString())
//Pasar de texto a tipo de dato Entero
let numbEr ="2"
console.log(parseInt(numbEr))

//Pasar de texto a tipo de dato Real

let numbeR = "2"

console.log(parseFloat(numbeR))


//Ejercicio con funciones de convertir dolares a pesos y pesos a dolares.

const dolarPeso = function(a,b) {
    
    return conversion=(a*b)
}

//console.log(dolarPeso(3,4))

const pesoDolar = function (a,b){
    return conversion=(a/b)
}

alert("Este programa nos permite convertir Pesos a dolares/ Dolares a pesos")
let optswitch= prompt("Escoja 1 para convertir de Dolares a pesos o Escoja 2 Para convertir de Pesos a dolares")

let Number1;
let dolar=4014.25


switch (optswitch) {
    case "1" :
Number1 = prompt("Cuantos dolares a pesos colombianos desea convertir")
alert(dolarPeso(Number1,dolar))
break;
case "2" :

    Number1 = prompt("Cuantos pesos colombianos a dolares desea convertir")
    alert(pesoDolar(Number1,dolar).toFixed(2))
    break;
default:
    alert("Opcion no valida")
    break;
}


//Crea un programa para determinar areas de figuras geometricas usando funciones

