// Rutas de Usuarios
// host + /api/auth

const { Router } = require("express");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { check } = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')

const router = Router()

//Peticion POST es un posteo de informacion por ejm crear un user es una peticion POST
//NEW USER ------------------------------
router.post('/new',

        [//middlewares
                check('name', 'El nombre es obligatorio').not().isEmpty(),
                check('email', 'El email es obligatorio').isEmail(),
                check('password', 'El password debe contener mínimo 6 caractéres').isLength({ min: 6 }),
                validarCampos
        ],
        createUser)

//LOGIN ------------------------------
router.post('/', 
[//middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe contener mínimo 6 caractéres').isLength({ min: 6 }),
        validarCampos
], 
loginUser)

//RENEW ------------------------------
router.get('/renew', validarJWT, renewToken)


module.exports = router;