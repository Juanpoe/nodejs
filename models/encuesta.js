const {Schema, model} = require('mongoose')
// Definir la estructura  de la colección
const EncuestaSchemam = Schema ({
    nombreEncuesta: {
        type:  String
    },
    fecha: {
        type: String
    },
    documentoEncuestado: {
        type: String
    },
    nombreEncuestado: {
        type: String
    },
    edad:{
        type: Number
    },
    genero:{
        type: String
    },
    empleado:{
        type: Boolean
    }



})

module.exports = model('Encuesta', EncuestaSchemam)