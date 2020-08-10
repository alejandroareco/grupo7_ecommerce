const express = require ('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const path = require('path');
const multerCargaProducto = require ('../middleware/multerCargaProducto')

router.get('/cargaProducto',productosController.cargaProducto);/*Formulario de carga de producto*/
/* agregue funcionalidad para multer a la ruta upload.any() */
router.post('/cargaProducto', multerCargaProducto.any(), productosController.cargarProducto); /*(enviar producto agreado a archivo json)*/

router.get('/carrito',productosController.carrito);
router.get('/detalleProducto',productosController.detalleProducto);

  

router.get('/listadoProductos',productosController.listadoProductos); /*Listado de todos los productos cargados*/


router.delete('/eliminar/:id',productosController.eliminar);
router.get('/eliminar/:id', productosController.eliminarv)
router.get('/eliminado', productosController.eliminado);/*Borrar producto del json*/


/*
faltan agregar funcionalidad en productosController.js

router.get('/products/:id',productosController.detalleDeProducto); Detalle de un producto determinado
router.get('/products/:id/edit', productosController.editar); Formulario de edicion de productos
router.put('products/:id',productosController.editado); Enviar producto editado a archivo json

*/

module.exports = router;

