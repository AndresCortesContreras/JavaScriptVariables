const saludo = function (nombre){
    return`Hola ${nombre} bienenido a mi funcion con modulo`
}

const despedir = function (nombre){
    return  `Hola ${nombre} que tengas buena noche`
}

// Exportar la función

module.exports = {
    saludo:saludo
}