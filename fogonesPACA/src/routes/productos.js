const express = require ('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const path = require('path');
const multerCargaProducto = require ('../middleware/multerCargaProducto')
const loggedUserMiddleware = require ('../middleware/loggedUser')

router.get('/cargaProducto',loggedUserMiddleware,productosController.cargaProducto);/*Formulario de carga de producto*/
/* agregue funcionalidad para multer a la ruta upload.any() */
router.post('/cargaProducto', multerCargaProducto.any(), loggedUserMiddleware, productosController.cargarProducto); /*(enviar producto agreado a archivo json)*/


router.get('/panelProducto', productosController.panelProducto )
router.get('/edit/:id', productosController.edit); //edita un producto//
router.post('/edit/:id', multerCargaProducto.any(), productosController.editado);
router.post('/borrado/:id',multerCargaProducto.any(), productosController.borrado);// borrado de SQL

router.get('/carrito',loggedUserMiddleware,productosController.carrito);
router.post('/carrito',loggedUserMiddleware,productosController.productoAgregado);
router.get('/detalleProducto/:id',productosController.detalleProducto);
router.get('/nosotros', productosController.nosotros);
router.get('/contacto', productosController.contacto);
router.get('/instructivo', productosController.instructivo);
router.get('/listadoProductos',productosController.listadoProductos); /*Listado de todos los productos cargados*/


module.exports = router;