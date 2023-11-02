//crear servidor por el metodo CreateServer
//Declaramos las variables y llamamos los metodos http y fs
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    //Leer el archivo index.html se usa el readFile 
    fs.readFile(`index.html`,`utf8`, (error, data) => {
        //Si tenemos algun error en la programación realizara la siguientes lineas de codigo.
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/html' })

            res.end('<h1>Error 500. Se presento un error en el servidor </h1>')
        }
        //Si realiza la conexión de forma correcta llama los archivos enlazados y funciona de forma correcta
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
    })
})

//Se define el puerto de la salida del servidor, podemos usar el 3000 o 8000

const puerto = 8000

//Iniciar el servidor, usamos el metodo listen para llamar el puerto.
server.listen(puerto, () => {

    console.log(`El servidor se esta ejecutado por : http//localhost:${puerto}`)
})