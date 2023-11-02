//Llamamos el modulo de express con la función
const express = require('express')
// con este determinamos que usaremos un app con express
const app = express()

//Permite obtener la información enviada por medio de POST
app.use(express.urlencoded({extends:true}))

//Enrutamiento de nuestra pagina
/*
app.get('/',(req,res)=>{
res.sendFile(__dirname +'/index.html')
})

app.get('/Error',(req,res) => {
    res.sendFile(__dirname + '/error.html')
    })

app.get('/a',(req,res) => {
res.send('Esta es la pagina de inicio')
})

app.get('/InicioSesion',(req,res) => {
res.send('Modulo inicio sesion')
})


//Manejo de rutas no definidas utilizamos el comodin *

app.get('*',(req,res)=>{
res.send('Pagina no encontrada')
})
app.listen(3000,()=>{
    console.log(`Se inicio la app en HTTP://localhost:3000`)
})
*/

// crear un archivo de inicio de sesion de html que contenga un formulario de inicio sesión

/*app.get('/',(req,res) => {
    res.send('Esta es la pagina de inicio')
    })*/
app.get ('/Index',(req,res) => {
    res.sendFile(__dirname + '/inicioSesion.html')
})

app.post('/Bienvenido',(req,res) =>{
    const nombre = req.body.user
    const contra = req.body.pass
    res.send(`Gracias por iniciar sesion ${nombre}`)
})

app.get ('*',(req,res) =>{
    res.sendFile(__dirname +'/error.html')
})

app.listen(3000,()=>{
    console.log(`Se inicio la app en HTTP://localhost:3000`)
})