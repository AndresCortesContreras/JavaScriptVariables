// Con SET podemos guardar información en el local storage

let nombreUsuario ="Liliana"

localStorage.setItem("nombre",nombreUsuario)

const comida = ["Tamal","Pasta"]
localStorage.setItem("comidaFavorita",comida)

//Para obtener información del local storage utilizamos el metodo getItem

let saveData = localStorage.getItem("comidaFavorita")
console.log(saveData)

let parrafoComida = document.getElementById("comida")
parrafoComida.textContent= `La comida favorita de liliana es: ${saveData} `


//Ejercicio fecha de nacimiento.

/*
let fecha = document.getElementById("fechaNacimiento")
let button =document.getElementById("boton")

button.addEventListener("click", function(){
   let valorfecha = fecha.value 
   localStorage.setItem("fecha nacimiento", valorfecha)
})

let fechaGuardada = localStorage.getItem("fecha nacimiento")

const parrafofecha = document.getElementById("parrafofecha")
parrafofecha.textContent = fechaGuardada
*/


//Ejericicio formulario con JSON - DOM- Local storage

let fecha = document.getElementById("fechaNacimiento")
let nombre =document.getElementById("nombre")
let apellido =document.getElementById("apellido")
let button =document.getElementById("boton")

//Se crea una clase usuarios para llenar los datos guardados 
class Usuarios{
    constructor(nombre, apellido, fecha){
        this.nombre=nombre
        this.apellido=apellido
        this.fecha=fecha
    }
}

//Se crea una función para guardar la información registrada declarando las variables
// con la Const USER llamamos la clase de usuarios para guardar los valores 

button.addEventListener("click", function (){
    let valorNombre = nombre.value
    let valorApellido = apellido.value
    let valorFecha = fechaNacimiento.value

    const user = new Usuarios(valorNombre, valorApellido, valorFecha)
    //Se crea un arreglo para guardar los datos en el.
    let usuarios = []

    //Guardamos los datos del arreglo en el local storage
    let localUsuarios = localStorage.getItem("usuarios")

    //Si localUsuarios no esta vacio el cumple if
    if(localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }

    //Con esta linea mandamos los valores a la clase 
    usuarios.push(user)
    
    // Aca llamamos los datos y convertimos los mismos a formato Json y damos una alerta de que el 
    //usuario se registro de forma exitosa

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("Usuario registrado")
})

// Creamos una constante para poder mostrar los usuarios en una lista 
const mostrarUsuarios = function (){
    let usuarios = []
    let localUsuarios = localStorage.getItem("usuarios")
    if(localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }
    let listaUsuarios = document.getElementById("Lista")
    usuarios.forEach(usuario => {
        let datoUsuario = document.createElement("li")
        datoUsuario.textContent = `Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido} - Fecha nacimiento: ${usuario.fecha}`
        //appendChild permite agregar un elemento HTML desde JavaScript
        listaUsuarios.appendChild(datoUsuario)
    })
}

mostrarUsuarios()