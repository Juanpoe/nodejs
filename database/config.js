const mongosee = require ('mongoose')
//Establecer conexion con el servidor 
const dbConnection=async() =>{
    try {
        //Si  hay conexión
        mongosee.connect(process.env.MONGOB_CNN,{})
        console.log('Estableciendo conexión con el servidor')
        
    } catch (error) {
        // EN caso de error en la conexión
        console.log('Conexion no establecida ')
        
    }

}

module.exports= {
    dbConnection // Exporta la función 
}