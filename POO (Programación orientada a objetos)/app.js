
//Asi podemos crear una clase
class Automovil {

    // El constructor no es mas que el molde o la plantilla para que los atributos de mis objetos
    //que cree con la clase.

    //Instanciar no es mas que crear un objeto 
    constructor(marca, modelo) {
        //This hace referencia a la misma clase
        //Estos son los atributos que van a compartir la clase.
        this.marca = marca
        this.modelo = modelo
        
    }
    //Crear un metodo
    encender() {
        return "Encendiendo el vehiculo"
    }
    apagar() {
        return "Apagando el vehiculo"
    }
    get getmodelo(){
        return this.modelo
    } 

}

const moto = new Automovil("Dominar", 2022)

console.log(moto)

//Acceder a información  de los objetos

//Propiedades
console.log(`La marca es ${moto.marca}`)

//Metodo
console.log(`acción a realizar ${moto.apagar()}`)



//Herencia

class cuatrimoto extends Automovil {
    constructor(marca, modelo) {
        //Super : Es el metodo que va a llamar el constructor de la clase padre
        super(marca, modelo)
        this.Cilindraje = null
    } 
    bateria() {
        return "Cargando bateria"
    }
    apagar (){
    return `El vehiculo tipo ${this.motoEletrica} se esta apagando`    
    }
//setter y getters
    //set es el metodo que permite modificar el valor de alguna propiedad de la clase

    set setCilindraje (Cilindraje) {
        this.Cilindraje=Cilindraje
    }

    //Sobreescritura : Muestra un mensaje especial si es una clase hijo
    //Get obtiene algun valor de la clase 
    get getCilindraje(){
        return this.Cilindraje
    }
    
}


//Instanciar una clase hijo

const motoEletrica = new cuatrimoto("Honda", 2021, 800)
motoEletrica.setCilindraje="1600"
console.log(motoEletrica.Cilindraje)
console.log(`La información de la moto electrica es ${motoEletrica}`)
console.log(motoEletrica)

console.log(motoEletrica.bateria())
console.log(motoEletrica.apagar())















