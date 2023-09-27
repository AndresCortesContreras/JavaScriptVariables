// Las funciones se declaran mediante la palabra function

//Funciones declaradas

function saludar(nombre,edad){
    console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`)
}

saludar("Andres","28")

//Valor retorno es el valor que devuelve una funcion apenas sea llamada

function sumar(a,b){
    let resultado
    resultado=a+b;
    
    return resultado
}

console.log(sumar(53,10))

// //Funciones expresadas: Hacen parte del ambito local, es decir solo estaran disponibles  una vez la haya creado
// No AuthenticatorResponse, nunca estan disponibles antes de que se creen

const despedir = function (){
return "Muchas gracias por utilizar el App hasta luego"
}

console.log(despedir())