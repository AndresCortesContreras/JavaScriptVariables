//Creación  de clases para exportar

class animal {
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    saludar(){
       return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} de edad`
    }
}



module.exports={
    animal
}