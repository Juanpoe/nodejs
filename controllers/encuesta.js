const { model } = require('mongoose')
const Encuesta = require('../models/encuesta')



const getEncuesta= async (req,res)=>{
   // const {placa, color, precio} =req.query
   const encuesta = await Encuesta.find()
    res.json({
        msg:'Encuesta GET API',
        encuesta
    })

}
// let promedio=0
// let contador=1
// const getPromedioEncuesta= async (req,res)=>{
//     const encuesta1 = await Encuesta.find({})
//     for (let index = 0; index < encuesta1.length; index++) {
//             const element = encuesta1[index];
//             let valor1 =element.empleado
//             let valor2 = element.edad
//             if(valor1){
//                 contador=+1
//                 let acumulador= acumulador+valor2
//                 promedio = acumulador/contador

//             }
//             res.json({
//                 msg:'Encuesta GET API',
//                 promedio
                
//             })
        
     
//         }
     
      
//  }
 

const postEncuesta =async (req,res)=>{
    //desestructuración de parámetros
    const{ nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado}=req.body
    //Crear el objeto
    const encuesta1 = new Encuesta({ nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado})
    //Guardar el mongodb
    await encuesta1.save();
    res.json ({
        msg:'Encuesta POST API',
        encuesta1
    })
}


const putEncuesta = async (req,res) =>{
    const { nombreEncuesta,fecha,documentoEncuestado,nombreEncuestado,edad,genero,empleado} = req.body
    const encuesta1 = await Encuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},{fecha:fecha,documentoEncuestado:documentoEncuestado,nombreEncuestado:nombreEncuestado,edad:edad,genero:genero,empleado:empleado})
    res.json({ 
        msg: "Encuesta API APUT",
        encuesta1
    })
}

const patchEncuesta = async (req,res) =>{
    const {nombreEncuesta, documentoEncuestado} = req.body
    const encuesta1 = await Encuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},{documentoEncuestado:documentoEncuestado})
    res.json({ 
        msg: "Encuesta API APUT",
        encuesta1
    })
}

const deleteEncuesta = async(req,res) =>{
    const{nombreEncuesta}=req.query
    const encuesta1 = await Encuesta.findOneAndDelete({nombreEncuesta:nombreEncuesta}) 
    res.json({
        msg:"Encuesta DELETE API",
        encuesta1
    })
}





module.exports = {
    getEncuesta,
    postEncuesta,
    deleteEncuesta,
    patchEncuesta,
    putEncuesta
}

