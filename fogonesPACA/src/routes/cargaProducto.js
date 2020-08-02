const express = require ('express');
const router = express.Router();
const cargaProductoController = require('../controllers/cargaProductoController');
const multer = require('multer'); /*requeri multer*/
const path = require('path');


router.get('/',cargaProductoController.cargaProducto);/*Formulario de carga de producto*/

/*ruta de almacenamiento de imagen*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/fotosProductosNuevos')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage });
  
/* agregue funcionalidad para multer a la ruta upload.any() */
router.post('/', upload.any(), cargaProductoController.cargarProducto); /*(enviar producto agreado a archivo json)*/
router.get('/listadoProductos', cargaProductoController.listadoProductos); /*Listado de todos los productos cargados*/

router.delete('/eliminar',cargaProductoController.eliminar);
router.get('/eliminar', cargaProductoController.eliminado)/*Borrar producto del json*/


/*
faltan agregar funcionalidad en cargaProductoController.js

router.get('/products/:id',cargaProductoController.detalleDeProducto); Detalle de un producto determinado
router.get('/products/:id/edit', cargaProductoController.editar); Formulario de edicion de productos
router.put('products/:id',cargaProductoController.editado); Enviar producto editado a archivo json

*/

module.exports = router;

