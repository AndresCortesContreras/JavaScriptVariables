/* Definicion o creación de un arreglo
Solo es necesario utlizar la siguiente sintaxis o estructura
const NombreArreglo = ["Elemento1", "Elemento2", "Elemento3".......]*/

const colores = ["verde", "rosado", "amarillo", "azul"]

console.log(colores)
//Para acceder a un elemento en especifico se utiiza el id que asigna el arreglo de la siguiente manera

console.log(colores[2])


const variosDatos = ["Dato caracter tipo string", 2356, true, "A", ["Liliana", 32]]

console.log(variosDatos)


//Acceder a una información de un arreglo dentro de otro arreglo
console.log(variosDatos[4][1])

//arreglo con información

const informacion = ["Andres", "Cortes", 28, "email", 3232323]

console.log(`El arreglo arroja el siguiente dato`)


//Push sirve para agregar un nuevo elemento al arreglo

informacion.push("Carrera siempre viva 123")

console.log(informacion)


//Borra el ultimo agregado al arreglo
informacion.pop()
console.log(informacion)

//Arreglo de los 100 primeros nuevos

const numeros = Array(100).fill(0)

console.log(numeros)

//propiedad de los arreglos Length permite saber el tamaño del arreglo.
console.log(informacion.length)

//Borrar un elemento en especifico del arreglo, se usa Splice de acuerdo a la posición que tiene

informacion.splice(0, 1)

console.log(informacion)

//Recorriendo arreglos 
//Para recorrer arreglos se usa la estructura de control FOR

const localidades = ["Kennedy", "Usaquen", "Bosa", "Suba", "Fontibon", "Sumapaz", "Teusaquillo", "Chapinero", "Ciudad Bolivar", "Antonio Nariño", "Santa Fe", "Martires", "Puente Aranda", "Soacha", "Tunjuelito", "Usme", "Engativa", "La candelaria"]
console.log(`En el arreglo localidades hay ${localidades.length} localidades`)


console.log(`En el arreglo de localidades hay ${localidades} localidades`)

// La estructura de control FOR sirve para recorrer un arreglo 
for (let i = 0; i < 18; i++) {
    console.log(`La localidad es ${i} es ${localidades}`)
}


for (let i = 0; i < colores.length; i++) {
    console.log(`Tengo el ${colores[i]} en mi arreglo de colores`)
}

/*Estructura de control For each : Es una estructura de control especialmente util para 
datos compuestas como los arreglos*/

const informacion2 = ["Desarrolador", "Andres", "Cortes", 28, "email", 3232323]

informacion2.forEach(dato => {
    console.log(dato)
})


colores.forEach(color => {
    console.log(color)
})

// Ejericio de arreglo con canciones

const cancionesFavoritas = ["Eclipse de amor", "forever de kiss", "dias tras dia ", "el serrucho de mr. black", "Get Lucky", "I waiting for you", "Open sesami", "chau - no te va a gustar", "Perfect", "november rain", "Las mañanitas", "Elevation U2", "Radio Ga Ga", "i wanna be yours"]

for (i = 0; i < cancionesFavoritas.length; i++) {
    console.log(cancionesFavoritas[i])
}


cancionesFavoritas.forEach(cancion => {
    console.log(`Cancion favorita es ${cancion}`)
})

console.log("-----------OBJETOS---------------")
//Dato compuesto Objetos


const carro = {
    //Propiedades del carro
    //Caracterisiticas propias del objeto
    marca: "Suzuki",
    color: "negro",
    modelo: 2022,
    propietarios: ["Lliliana", "Sebastian", "Carlos"],
    //Metodos del carro
    //Los metodos son comportamientos o acciones propias del carro
    acelerar: function () {
        return "Estoy acelerando"
    },
    frenar: function () {
        return "Estoy frenando"
    },
    encendido: function () {
        return "Estoy encendiendo el vehiculo"
    },

    apagado: function () {
        return "Apagando el vehiculo"
    }
}

console.log(`Los propietarios de los vehiculos han sido ${carro.propietarios} y la marca es ${carro.marca}`)

carro.propietarios.forEach(duenios => {
    console.log(duenios)
})

//Acceder a los metodos de un objeto
console.log(carro.apagado())

//Modificar las propiedades de un objeto 

carro.marca = "BMW"
console.log(carro.marca)

//Borrar un dueño del carro

carro.propietarios.pop()
console.log(carro.propietarios)

console.log(carro.propietarios[1])



const mascota = {
    //Propiedades
    nombre:"Lluvia",
    raza: "freshpuddle",
    edad: 10,
    propietario: {
        nombre: "Andres",
        apellido: "Cortes",
        edad: 28,
        contacto:{
            telefono:"332323232",
            email:"lluvia@gmail.com",
            direccion:"calle siempre viva 123"
        }
    },
    vacunado: true,
    pasatiempos: ["Correr", "Dormir"],
    jugueteFavorito: "Peluche",

    //metodos 

    ladrar: function () {
        return "Estoy corriendo"
    },
    correr: function () {
        return "Estoy corriendo"
    },
    comer: function () {
        return "Estoy corriendo"
    },
}


console.log(`El telefono de la mascota ${mascota.nombre} es ${mascota.propietario.contacto.telefono}`)
