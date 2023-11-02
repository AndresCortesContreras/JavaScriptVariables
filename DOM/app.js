//Como seleccionar un elemento por medio de los selectores

//Para obtener un elemento por medio de una etiqueta HTML

//Usamos Document hace referencia al html

//Llamar etiqueta

console.log(document.getElementsByTagName("p"))


//Llamar una clase

console.log(document.getElementsByClassName("elemento-selector")) //Obtener algun elemento por medio de las clases


//Llamar id

console.log(document.getElementById("title-principal"))

/*Para acceder a un elemento en especifico ya sea seleccionando por etiquete o clases podemos 
utilizar nuestra sintaxis de arreglos*/

console.log(document.getElementsByTagName("li")[2].innerText)

/*Para agregar contenido a una etiqueta*/

let parrafo = document.getElementById("parrafo")

console.log(parrafo)

let num1 = 15, num2 = 20

parrafo.textContent = `El resultado de la suma es : ${num1 + num2}`

/*Agregar un elemento con codigo al html*/

/*let texto2 = document.createElement("h3")

texto2.setAttribute("id","text2")

document.getElementById("text2")*/

let botonFormulario = document.getElementById("botonFormulario")

botonFormulario.addEventListener("click", function () {
    let nombreFormulario = document.getElementById("nombre")
    console.log(nombreFormulario.value)
    //Value permite obtener el valor que ingresa en una entrada de un formulario
    let parrafoResultado = document.getElementById("resultadoParrafo")
    parrafoResultado.textContent = nombreFormulario.value

})

//Ejercicio calculadora

//Ejercicio suma 
/*
let botonSumar = document.getElementById("sumar")
botonSumar = document.addEventListener("click", function () {
    let number1 = document.getElementById("numb1").value
    let number2 = document.getElementById("numb2").value

    resultado = parseInt(number1) + parseInt(number2);

    console.log(`El resultado de la suma es ${resultado}`)
    //Resultado parrafo
    let resultadoCalculadoraSuma = document.getElementById("resultadoCalculadora")
    resultadoCalculadoraSuma.textContent = `El resultado de la suma es ${resultado}`
})

let botonRestar = document.getElementById("Restar")
botonRestar = document.addEventListener("click", function () {
    let number1 = document.getElementById("numb1").value
    let number2 = document.getElementById("numb2").value

    resultado = parseInt(number1) - parseInt(number2);
    console.log(`El resultado de la resta es : ${resultado}`)

    let resultadoCalculadoraResta = document.getElementById("resultadoCalculadora")
    resultadoCalculadoraResta.textContent = `El resutado de la resta es : ${resultado}`
})

let botonMultiplicar = document.getElementById("Multiplicar")
botonMultiplicar = document.addEventListener("click", function () {
    let number1 = document.getElementById("numb1").value
    let number2 = document.getElementById("numb2").value
    resultado = parseInt(number1) * parseInt(number2)
    console.log(`El resultado de la multiplicación es : ${resultado}`)

    let resultadoCalculadoraResta = document.getElementById("resultadoCalculadora")
    resultadoCalculadoraResta.textContent = `El resutado de la Multiplicación es : ${resultado}`
})

let BotonDivision = document.getElementById("Dividir")
BotonDivision = document.addEventListener("click", function () {
    let number1 = document.getElementById("numb1").value
    let number2 = document.getElementById("numb2").value

    if (number2 != 0) {
        resultado = parseInt(number1) / parseInt(number2)
        console.log(`El resultado de la División es : ${resultado}`)

        let resultadoCalculadoraResta = document.getElementById("resultadoCalculadora")
        resultadoCalculadoraResta.textContent = `El resutado de la Multiplicación es : ${resultado}`
    }
    else {
        let resultadoCalculadoraResta = document.getElementById("resultadoCalculadora")
        resultadoCalculadoraResta.textContent = `No es posible dividir en 0`
    }

})*/

//Ejercicio calculadores usando funciones
//Ejercicio calculadora con switch 

let buttonSumar = document.getElementById("sumar");
let buttonRestar = document.getElementById("restar");
let buttonMulti = document.getElementById("multiplicar");
let buttonDivision = document.getElementById("dividir");
let resultadoCalculadora = document.getElementById("resultadoCalculadora");


const calculo=  function(operador) {
    let number1 = document.getElementById("numero1").value
    let number2 = document.getElementById("numero2").value
    let resultado;
}

/*const suma = function (a, b) {
    resultado = parseInt(number1) + parseInt(number2)
    return resultado
}

const resta = function (a, b) {
    resultado = parseInt(number1) - parseInt(number2)
    return resultado
}

const multi = function (a, b) {

    resultado = parseInt(number1) * parseInt(number2)
    return resultado
}


const divi = function (a, b) {


    if (b != 0) {

        resultado = parseInt(number1) / parseInt(number2)
        return resultado
    }
    else {
        let indivisible = console.log("No es posible divisir en 0")
    }

}
*/

switch (operador) {
    case "sumar":
        resultado=number1+number2
        break;
    case "restar":
        resta.resultado
        break;
    case "multiplicar":
        multi.resultado
        break;
    case "dividir":
        divi.resultado
        break;

}
resultadoCalculadora.textContent = `El resultado de la multiplicación es ${resultado}`

botonSumar.addEventListener("click", function () {
    calcular("sumar");
});

botonRestar.addEventListener("click", function () {
    calcular("restar");
});

botonMultiplicar.addEventListener("click", function () {
    calcular("multiplicar");
});

botonDivision.addEventListener("click", function () {
    calcular("dividir");
});