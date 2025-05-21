const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const productoRoutes=require('./routes/productoRoutes')
const usuariosRoutes=require('./routes/usuariosRoutes')

const app=express();
const PORT=3000;

//Midleware
app.use(bodyParser.json());
app.use(cors());

//conexion a mongo

mongoose.connect('mongodb://localhost:27017/tallerMongoDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("MongoDB conectado"))
.catch(err=>console.err(err))

//Rutas
app.use('/api/Usuarios',usuariosRoutes);
app.use('/api/producto',productoRoutes);

app.listen(PORT,()=>{
    console.log(`Servidor conectado en http://localhost:${PORT}`);
});


