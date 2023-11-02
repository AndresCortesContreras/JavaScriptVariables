

class personas {
    constructor (nombre,apellido,edad,correo,telefono,hobbie){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.correo=correo
        this.telefono=telefono
        this.hobbie=hobbie
    }

    saludar(){
        return `Hola mi nombre es ${this.nombre} y puedes contactarme en el correo ${this.correo}`
    }
}

module.exports={
    personas
}