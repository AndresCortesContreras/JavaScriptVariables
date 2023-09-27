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


//Operadores aritmeticos



let num1, num2, resultado;

num1=65;
num2=87;
//Suma
resultado=num1+num2;
console.log("El resultado de la suma es ", resultado)
//Resta
resultado=num1-num2;
console.log("El resultado de la Resta es ", resultado)
//Multiplicación
resultado=num1*num2;
console.log("El resultado de la multiplicación es ", resultado)
//División
resultado=num1/num2;
console.log("El resultado de la Dvisión es ", resultado)
//Agrupación operaciones
resultado=((num1/num2)*num2);
console.log("El resultado de la Dvisión es ", resultado)

//incremento
resultado=num1+1;
num2++
console.log("El resultado de la incremento es ", num2)

//decrementos

num2--

console.log("El resultado del decremento es", num2)

//Operadores de comparación

//Mayor que 

num1=25;
num2=13;

resultado=num1>num2
console.log(resultado)
//Menor que 
resultado=num1<num2
console.log(resultado)

//Mayor o igual que 
num1=13;
num2=13;
resultado=num1>=num2
console.log("Mayor o igual que ", resultado)

//Menor o igual que 
num1=13;
num2=5;
resultado=num1<=num2
console.log("Menor o igual que ", resultado)

//Igual me permite comparar tanto numeros como caracteres ==

num1=4;
num2="4";
resul=num1==num2;
console.log("Igual",resul)

//Igual me permite comparar tanto numeros como caracteres ===

num1=4;
num2=4;
resul=num1===num2;
console.log("Igual 3 =",resul)

//distinto

distinto=num1!=num2
console.log(distinto)


//Operadores logicos

//Operador y (AND) && Simbolo utilizado

resultado=true && false

console.log("Operador Y es igual a ", resultado)

//Operador o (or) || Simbolo utilizado

resultado=true||true
console.log("Operador O es igual a ",resultado)

//operador negación ! Simbolo utilizado
resultado=!true
console.log(resultado)