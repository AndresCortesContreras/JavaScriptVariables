//Ejercicio calculadores usando funciones
//Ejercicio calculadora con switch 

let buttonSumar = document.getElementById("sumar");
let buttonRestar = document.getElementById("restar");
let buttonMulti = document.getElementById("multiplicar");
let buttonDivision = document.getElementById("dividir");
let resultadoCalcu = document.getElementById("resultadoCalculadora");
var resultadoMostrar 

buttonSumar.addEventListener("click", function () {
   var resultadoMostrar= operar("sumar");
   
});

buttonRestar.addEventListener("click", function () {
    resultadoMostrar= operar("restar");
});

buttonMulti.addEventListener("click", function () {
    resultadoMostrar= operar("multiplicar");
});

buttonDivision.addEventListener("click", function () {
    resultadoMostrar= operar("dividir");
});

function operar(calculadora) {
    let number1 = parseInt(document.getElementById("numero1").value)
    let number2 = parseInt(document.getElementById("numero2").value)
    let resultado

    console.log(calculadora)

    switch (calculadora) {
        case "sumar":
            resultado = (number1 + number2)
            console.log(resultado)
            break;
        case "restar":
            resultado = (number1 + number2)
            break;
        case "multiplicar":
            resultado = (number1 * number2)
            break;
        case "dividir":
            if (number2 != 0) {
                resultado = (number1 / number2)
                break;
            } else {
                resultadoCalcu.textContent = `El resultado es indivisible`
            }
            divi.resultado
            break;
    }
return resultado
}
resultadoCalcu.textContent = `El resultado de la * es ${resultadoMostrar}`




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