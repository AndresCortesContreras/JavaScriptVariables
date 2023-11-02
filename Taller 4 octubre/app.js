//Declaración de variables


//a. Define una variable llamada nombre y pídele al usuario que ingrese su nombre..

/*let nombre,edad;

nombre=prompt ("Ingrese Su primer nombre")
edad=prompt ("Ingrese Su primer edad")


alert(`Bienvenido ${nombre} con edad ${edad}`)*/

//Declara una constante llamada PI y asígnale el valor de 3.1416. Luego, calcula el área de un
//círculo utilizando esta constante y muestra el resultado.

/*let pi,radio;

pi=3.1416

alert("Ejercicio para calcular el area de un circulo")
radio=prompt("Ingrese el radio del circulo")

resultado=parseFloat(pi*(radio**2))
alert(`El resultado del area del circulo es ${resultado}`)*/

//Pide al usuario que ingrese dos números y realiza una operación matemática (suma, resta,
//multiplicación o división) con ellos. Muestra el resultado.

let numero1,numero2;

alert("Ejercicio para realizar una operación matematica")
alert("Ingresa 2 numeros ")
numero1=prompt("Ingresa el primer numero")
numero2=prompt("Ingresa el segundo numero")
numero1=parseFloat(numero1)
numero2=parseFloat(numero2)

//Ejercicio operaciones 

/*
alert(`El resultado de la suma es ${(parseInt(numero1)+parseInt(numero2))}`)
alert(`El resultado de la resta es ${(numero1)-(numero2)}`)
alert(`El resultado de la Multiplicación es ${(numero1)*(numero2)}`)

if (numero2!=0){
    alert(`El resultado de la División es ${(numero1)/(numero2)}`)
} else {
    alert(`El numero es indivisible`)
}*/

//Con los dos mismo números que pediste en el punto anterior, ¿como podrias realizar la
//operacion de raiz cuadrada y de potencia?

if (numero1>=0 && numero2>=0){
    alert(`La raiz cuadrada de la primera variable es ${(numero1*(0.5))}`)
} else {

}
alert (numero1)
alert (numero2)
alert(`La potencia del numero es ${(numero1)**(numero2)}`)





