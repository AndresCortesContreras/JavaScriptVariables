/*Una api es un intermediario que puede ayudar en la comunicación de dos 
programas y así puedan compartir información*/

//Se realiza la solicitud con Fetch a la pagina o el servidor de JsonPlaceHolder

/*fetch("https://jsonplaceholder.typicode.com/users")
//Una vez se hace la solicitud a JsonPlaceHolder tenemos una respuesta 
//Esa respuesta se guarda automaticamente, en response

//Response.json() va a guardar la respuesta de la solicitud en formato Json
.then(response => response.json())

//Cuando ya tenemos esos datos en formato Json podemos acceder a ellos por medio de data.

/*.then(data=>{
    console.log(data)
})

.then(data=>{
    data.forEach(element => {
        console.log(`El titulo del libro es ${element.name}`)
    });
})*/

//Si ocurre algun error utilizamos cath

/*try {
    throw "MyException";
} catch(e)
{
    logMyErrors(e);
}*/



//Hacer una Api Fetch que traiga los elementos de comments de Jsonplaceholder

/*fetch("https://jsonplaceholder.typicode.com/comments")
.then(response=>response.json())

.then(correo=>{
    correo.forEach(elemento=>{
        console.log(`El correo es ${elemento.email} y dejo el siguiente mensaje ${elemento.body}`)
    })
})*/


//Api Fetch para el Json de datos creado
fetch ("datos.json")
.then(response=>response.json())
/*.then(answer=>{
    console.log(answer)
})*/
.then( data=> {
    for(let i=0; i < data.length; i++) {
        console.log(`${data[i].nombre} ${data[i].Apellido} tiene ${data[i].edad} años y su numero de telefono es
        ${data[i].contacto.telefono}`)
    }
})


fetch ("datos.json")
.then(response=>response.json())
.then (datos=>{
    datos.forEach(element => {
        console.log(`${element.nombre} ${element.Apellido} y su edad es ${element.edad} y su 
        numero telefonico es ${element.contacto.telefono}`)
    });
})