const express = require ('express')
const cors = require('cors')
const {dbConnection} = require ('../database/config')// Vincular la Conexión 

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.port// puerto de la aplicación 
        this.encuestaPath='/api/encuesta'
        //incluir otras funcionalidades  a la aplicación
        this.middlewares()
        this.conectarDB()
        this.routes()


    }

async conectarDB() { // Espera
    await dbConnection ()
}

    middlewares(){//Otras Funcionalidades
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())
        }

    routes(){//Rutas de la aplicación 
        this.app.use(this.encuestaPath,require('../routes/encuesta'));
    }


   listen(){//Escuchar el puerto
    this.app.listen(this.port, (req,res)=>{
        console.log(`Escuchando por el puerto ${this.port}`)
    })
    }

    
}

module.exports	= Server

