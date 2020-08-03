const express = require ('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const {check, validationResult, body} = require('express-validator');//requiero validator a travez del destructuting//
const fs = require('fs');//requiero fs para poder buscar si el usuario esta registrado//
const path = require ('path')
const multer = require ('multer');

//esto lee el user.json para chequear validator //

/*let usuarios =fs.readFileSync(path.join(__dirname, '../data/user.json'), 'utf-8');
usuarios = JSON.parse(usuarios);*/

// multer //

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/img/user')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer ({storage:storage});



router.get('/',loginController.login);
router.post('/',loginController.sesion);
router.get('/registro',loginController.registro);
//aca se chequea el mail y el password que llega a travez del form de registro//
router.post('/registro',[
    check('email').isEmpty().isEmail().withMessage('Tenés que ingresar un email válido. Recorda usar @'),
    /*body('email')
    .custom(function(value) {
        for(let i = 0 ; i < usuarios.length; i++) {
            if(value == usuarios[i].email) {
                return false
            }
        }
        return true
    }).withMessage('el imail ingresado, esta registrado'),
*/
    check('password').isEmpty().isLength({min:8, max: 16}).withMessage('La contraseña tiene que tener un mínimo de 8 caracteres y un máximo de 16')]
    ,upload.any(), loginController.registrado);

    
    module.exports = router;  