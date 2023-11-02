//Importar el modulo HTTP

const http = require (`http`)

//crear nuestro servidor

const server = http.createServer((req,res )=>{
  //El metodo end define una respuesta final dada el servidor al cliente
  res.end(`Hola ! esta es mi primer servidor`)  
})

//Se define el usuario de salida del servidor 
const puerto = 3000;
//Iniciar el servidor 

server.listen(puerto, ()=>{
    console.log(`El servidor se esta ejecutando por: http://localhost:${puerto}`)
})