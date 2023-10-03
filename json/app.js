/*Creación de un objeto persona */
const persona = {
    nombre: "Andres",
    apellido: "Cortes",
    edad: 28,
    peso: "90kg",
    estatura: 170,
    sexo:"m",
    fechaNacimiento:"03/10/1994"

}

//Acceder a la información del objeto

//Para acceder a la información del objeto lo hacemos de la siguiente manera
//NombreObjeto.NombrePropiedad

console.log(persona.nombre)
console.log(persona.fechaNacimiento)


//Modificar una propiedad
console.log(persona.peso)
persona.peso="60kg"
console.log(persona.peso)

/*Agregar una nueva propiedad al objeto*/

persona.ciudad="Bogota"
console.log(persona)

/*Pasando de objeto en Java Script a formato Json*/

let objeto_json = JSON.stringify(persona)
console.log(`Objeto persona convertido a Json ${objeto_json}`)

/*Pasando de formato Json a objeto*/

let json_objeto = JSON.parse(objeto_json)
console.log(json_objeto)

