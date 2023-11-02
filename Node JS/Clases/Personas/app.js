

const clases = require(`./personas`)
const persona = new clases.personas(`Andres`,`Cortes`,6,`andres.cortes@backend.com`,321212311,`Peliculas y video juegos`)

console.log(persona)
console.log(persona.saludar())