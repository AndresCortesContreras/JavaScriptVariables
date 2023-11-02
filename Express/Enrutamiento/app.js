//Llamamos el modulo de express con la función
const express = require('express')
// con este determinamos que usaremos un app con express
const app = express()


//Enrutamiento de nuestra pagina

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
