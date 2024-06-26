const { response } = require("express");
const bcrypt = require('bcryptjs');
const Usuario = require("../models/Usuario");
const {generarJWT} =  require('../helpers/jwt')


const createUser = async(req,res = response) => {
    const { email, password} = req.body
   try {

    let usuario = await Usuario.findOne({email});

    if (usuario) {
        return res.status(400).json({
            ok:false,
            msg: 'Ya existe un usuario con este email'
        })
    }
    usuario = new Usuario(req.body)

    // encriptar contraseña 
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    const token = await generarJWT(usuario.id, usuario.name)

    res.status(201).json({
        ok:true,
        uid: usuario.id,
        name: usuario.name,
        token
    })
    

    //Generar Jsonwebto
  

} catch(error){

        console.log('error :>> ', error);
        res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el admin'
        })

    }

}

const loginUser = async(req,res = response) => {
    const {email, password} = req.body

    try{

    const usuario = await Usuario.findOne({email});

    if (!usuario){
    return res.status(400).json({
        ok:false,
        msg: 'Noexiste un usuario con este email'
    })
    }

    //confirmar password
    const validPassword = bcrypt.compareSync(password,usuario.password);

    if (!validPassword){
        return res.status(400).json({
            ok:false,
            msg: 'Password  incorrecto'
        })
    }

    const token = await generarJWT(usuario.id, usuario.name)

    //Generar Jsonwebto
    res.json({
        ok:true,
        uid: usuario.id,
        name: usuario.name,
        token: token

    })
    }
    catch(error){
        res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el admin'
        })

    }
}

const renewToken = (req,res = response) => {

    res.json({
        ok:true,
        msg: 'renew'
    })
}

module.exports = {createUser , loginUser, renewToken}