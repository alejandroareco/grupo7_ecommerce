const express = require ('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const sesionValidation = require('../validation/sesionValidation');
const registerValidation = require ('../validation/registerValidation'); //registerValidation funcionalidad de validator //
const multerRegister = require('../middleware/multerRegister'); //modularice multer al middleware //
const loggeduserMiddleware = require('../middleware/loggedUser');
const admindMiddleware = require('../middleware/isAdmin');

//router.get('/',loginController.welcome);
//router.get('/home',loginController.home);
router.get('/',loginController.login);
router.get('/logout',loginController.logout);
router.post('/', sesionValidation, loginController.sesion);
router.get('/miCuenta',loggeduserMiddleware,loginController.miCuenta);
router.post('/miCuenta',loginController.miCuentaEditado); //aun no anda// 
//router.post('/',loginController.sesion);
router.get('/registro',loginController.registro);
//aca se chequea el mail y el password que llega a travez del form de registro//
router.post('/registro',multerRegister.any(), registerValidation, loginController.registrado); //modularice register a la carpeta de registerValidation//
router.get('/panelUsuario', admindMiddleware, loginController.panelUser );
router.post('/panelUsuario/:id', admindMiddleware, loginController.panelUserEdit )
router.get('/panelUsuario', admindMiddleware, loginController.panelUser );

////////////////////RUTA DE PRUEBA PARA FUNCIONAMIENTO DE SEQUELIZE///////////////////////////

/*router.get('/testSequelize', function (req, res, next){
   //db.sequelize.query('SELECT * FROM users')
//   db.User.findAll()
//   .then(function(response){
        //res.send(response)
//        res.render('testSequelize', {
//             usuarios:response
//        })
//   })
//});

router.get('/testSequelize', function (req, res, next){
     db.Product.findAll()
     .then(function(response){
          //res.send(response)
          res.render('testSequelize', {
               products:response
          })
     })
  });*/

////////////////////RUTA DE PRUEBA PARA FUNCIONAMIENTO DE SEQUELIZE///////////////////////////


////// -------------------------------------------------------------------------- //////


////////////////////ESTO HACIA ROMPER EL REGISTRO, HABRIA QUE PROBARLO EN ROUTES/PRODUCTS ///////////////////////////




  
////////////////////ESTO HACIA ROMPER EL REGISTRO, HABRIA QUE PROBARLO EN ROUTES/PRODUCTS ///////////////////////////


module.exports = router;  