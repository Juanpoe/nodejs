//Vincular Clases  o Archivos
const Server = require('./models/server')


//Permite emplear el .env
require('dotenv').config();

//Instanciar un objeto de la Clase Sever 
const serve = new Server();

//Escuchar el puerto
serve.listen()