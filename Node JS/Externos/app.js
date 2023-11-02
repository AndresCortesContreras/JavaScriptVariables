//Importar modulos lodash
const {sortBy, uniq} = require (`lodash`)
const numeros = [8,10,7,6,5,7,8]


//Ordenar el arreglo con sortBy

console.log(sortBy(numeros))
console.log(sortBy(uniq(numeros)))