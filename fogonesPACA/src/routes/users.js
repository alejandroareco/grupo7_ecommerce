const express = require ('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const {check, validationResult, body} = require('express-validator');//requiero validator a travez del destructuting//
const fs = require('fs');//requiero fs para poder buscar si el usuario esta registrado//
const path = require ('path')

let usuarios =fs.readFileSync(path.join(__dirname, '../data/user.json'), 'utf8');
usuarios = JSON.parse(usuarios);

router.get('/',loginController.login);
router.post('/',loginController.sesion);
router.get('/registro',loginController.registro);
//agregue el mi
router.post('/registro',[
    check('email').isEmpty().isEmail().withMessage('Tenés que ingresar un email válido. Recorda usar @'),
    body('email')
    .custom(function(value) {
        for(let i = 0 ; i < usuarios.length; i++) {
            if(value == usuarios[i].email) {
                return false
            }
        }
        return true
    }).withMessage('el imail ingresado, esta registrado'),

    check('password').isEmpty().isLength({min:8, max: 16}).withMessage('La contraseña tiene que tener un mínimo de 8 caracteres y un máximo de 16')]
    ,loginController.registro);

module.exports = router;    