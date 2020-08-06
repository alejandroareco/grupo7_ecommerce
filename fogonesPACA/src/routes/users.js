const express = require ('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const registerValidation = require ('../validation/registerValidation'); //registerValidation funcionalidad de validator //
const multerRegister = require('../middleware/multerRegister'); //modularice multer al middleware //






router.get('/',loginController.login);
router.post('/',loginController.sesion);
router.get('/registro',loginController.registro);
//aca se chequea el mail y el password que llega a travez del form de registro//
router.post('/registro',multerRegister.any(), registerValidation, loginController.registrado); //modularice register a la carpeta de registerValidation//
        
    
    module.exports = router;  