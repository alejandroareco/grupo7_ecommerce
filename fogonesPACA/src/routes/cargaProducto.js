const express = require ('express');
const router = express.Router();
const cargaProductoController = require('../controllers/cargaProductoController');
const path = require('path');
const multerCargaProducto = require ('../middleware/multerCargaProducto')

router.get('/',cargaProductoController.cargaProducto);/*Formulario de carga de producto*/


  
/* agregue funcionalidad para multer a la ruta upload.any() */
router.post('/', multerCargaProducto.any(), cargaProductoController.cargarProducto); /*(enviar producto agreado a archivo json)*/
router.get('/listadoProductos', cargaProductoController.listadoProductos); /*Listado de todos los productos cargados*/


router.delete('/eliminar/:id',cargaProductoController.eliminar);
router.get('/eliminar/:id', cargaProductoController.eliminarv)
router.get('/eliminado', cargaProductoController.eliminado);/*Borrar producto del json*/


/*
faltan agregar funcionalidad en cargaProductoController.js

router.get('/products/:id',cargaProductoController.detalleDeProducto); Detalle de un producto determinado
router.get('/products/:id/edit', cargaProductoController.editar); Formulario de edicion de productos
router.put('products/:id',cargaProductoController.editado); Enviar producto editado a archivo json

*/

module.exports = router;

