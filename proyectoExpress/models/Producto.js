const mongoose=require('mongoose');


const itemSchema=new mongoose.Schema({
    nombredelProducto:{type:String,require:true},
    Precio:Number,
    categoria:String,
    creadoEn:{type:Date,default:Date.now}
});

module.exports=mongoose.model('Producto',itemSchema)
