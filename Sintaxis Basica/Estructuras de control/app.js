let edad = 17, nombre = "Andres";
//if - else
if
    (edad > 18) {
    console.log(nombre, "Eres mayor de edad")
} else if (edad == 18) {
    console.log("Todavia no cumples la edad suficiente")
}
else {
    console.log(nombre, "Eres menor de edad")
}

//Operador ternario ? simbolo
//? => Si se cumple = Verdadero
//? =< Si no se cumple = Falso

let mayor_edad = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad"

console.log(mayor_edad)

//Estructura Switch

let opcion, num1, num2, resultado;

opcion = ""
num1=12;
num2=54

switch (opcion) {
    case "Suma":
        console.log("Escogiste la suma")
        resultado=num1+num2
        break;
    case "resta":
        console.log("Escogiste la resta")
        resultado=num1-num2;
        break;
    case "multiplicacion":
        console.log("Escogiste la multiplicación")
        resultado=num1*num2;
        break;

    default :
    console.log("Operacion no definida")
    break;
}
console.log(resultado)


let name,lastname,age,song,answer;

name="Andres";
lastname="Cortes";
age=28;
song="No sufrire por nadie"
answer=true;
console.log(`Hola mi nombre es ${name} ${lastname} y tengo ${age} años, 
mi cacion favorita es ${song} y la respuesta es ${answer}`)

//Ejercicio descuento porcentaje

let opt1,opt2,opt3,ans,option,dozen;

option=4;
dozen=60000


console.log("Cuantas docenas desea comprar")
if  ((option>1)&&(option<5)){
    ans=dozen*0.10
    console.log(`El descuento es de ${ans} y el precio total es ${((option*dozen)-(ans*option))}`)
} else if ((option>=5)&&(option<=10)) {
ans=dozen*0.15
console.log(`El descuento a aplicar es de ${ans} y el precio total es ${((option*dozen)-(ans*option))}`)
}
 else if (option>10) {
    ans=dozen*0.20
    console.log(`El descuento a aplicar es de ${ans} y el precio total es ${((option*dozen)-(ans*option))}`)
    } else {
        console.log(`Su compra no aplica para descuento el valor a pagar es ${dozen}`)
    }

    /* While Ciclo mientras: Se ejecuta mientras que la condición sea verdadera, una vez sea falsa 
    se sale del ciclo*/
//Imprimir todos los numeros hasta el 10
    let number=0;

    while (number<=10){
        console.log(`El numero con While va en ${number}`)
        number++
    }

    /*Para (for) : Se ejecuta un numero determinado de veces */

    for(let i=1; i<=10; i++){
console.log(`El numero en FOR va en ${i}`)
    }