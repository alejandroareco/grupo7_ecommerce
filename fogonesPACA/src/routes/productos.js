const express = require ('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const path = require('path');
const multerCargaProducto = require ('../middleware/multerCargaProducto')
const loggedUserMiddleware = require ('../middleware/loggedUser')

router.get('/cargaProducto',loggedUserMiddleware,productosController.cargaProducto);/*Formulario de carga de producto*/
/* agregue funcionalidad para multer a la ruta upload.any() */
router.post('/cargaProducto',loggedUserMiddleware, multerCargaProducto.any(), productosController.cargarProducto); /*(enviar producto agreado a archivo json)*/


router.get('/panelProducto', productosController.panelProducto )
router.get('/edit/:id', productosController.edit); //edita un producto//
router.post('/edit/:id', multerCargaProducto.any(), productosController.editado);
router.post('/borrado/:id',multerCargaProducto.any(), productosController.borrado);// borrado de SQL

router.get('/carrito',loggedUserMiddleware,productosController.carrito);
router.post('/carrito',loggedUserMiddleware,productosController.productoAgregado);
router.get('/detalleProducto',productosController.detalleProducto);
router.get('/nosotros', productosController.nosotros);
router.get('/listadoProductos',productosController.listadoProductos); /*Listado de todos los productos cargados*/


router.delete('/eliminar/:id',loggedUserMiddleware,productosController.eliminar);
router.get('/eliminar/:id', loggedUserMiddleware,productosController.eliminarv)
router.get('/eliminado', loggedUserMiddleware,productosController.eliminado);/*Borrar producto del json*/



/*
faltan agregar funcionalidad en productosController.js

router.get('/products/:id',productosController.detalleDeProducto); Detalle de un producto determinado
router.get('/products/:id/edit', productosController.editar); Formulario de edicion de productos
router.put('products/:id',productosController.editado); Enviar producto editado a archivo json

*/

module.exports = router;