const express = require("express");
const { dbConnection } = require("./database/config");
require('dotenv').config();
//Crear servidor de express
const app = express()


//BASE DE DATOS
dbConnection();

//Directorio public
//funcion que se ejecuta cuando hago una peticion
app.use(express.static('public'));



//lectura y parseo del body
app.use(express.json())
//Rutas
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: eventos

//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto localhost:${process.env.PORT}:>> '`);
})