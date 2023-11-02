//Importar el modulo interno FS que permite gestionar archivos

const { error } = require("console")
const fs = require(`fs`)

fs.readFile(`prueba.txt`,`utf8`,(error,data) =>{
if (error){
    console.log(error)
} 
    console.log(data)
})