// Para definir una variable global utilizo VAR, 
var nombreVariable="Hola esta es mi variable"


//para imprimir el valor de la variable en consola utilizo console.log
console.log(nombreVariable)

nombreVariable="Segundo nombre de la variable"
console.log(nombreVariable)

var variabledos;

variabledos="SegundaVariable"
console.log(variabledos)

//variable locales
// un bloque de codigo es cualquier codigo que este encerrado en llaves, ejemplo 

let variableLocal="Segundo valor"
{
    let variableLocal="Primer valor"    
    console.log(variableLocal)
}
// solo se imprime dentro del bloque de codigo, esta que esta fuera sale error en consola
console.log(variableLocal)

//tipos logicos

//numero no se utiliza comillas

let numero = 2323232
console.log(numero)
// dato boleano verdadero o falso

let boleano = true
console.log(boleano)
//para texto encerramos en comillas los datos

let caracteres = "Hola Mundo!"
console.log(caracteres)

//Para definir una constante utilizamos la palabra reservada Const

const PI = 3.1416
console.log(PI)
