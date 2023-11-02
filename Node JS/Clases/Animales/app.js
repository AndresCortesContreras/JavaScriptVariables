//Importando clases 

const clases  = require(`./animales`)

const perro = new clases.animal(`lulu`,5)


console.log(perro)
console.log(perro.saludar())