const mongoose=require('mongoose');


const UsuariosSchema=new mongoose.Schema({
    nombre:{type:String,require:true},
    edad:Number,
    correo:String,
    creadoEn:{type:Date,default:Date.now}
});

module.exports=mongoose.model('usuarios',UsuariosSchema)
