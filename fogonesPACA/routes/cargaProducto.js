const express = require ('express');
const router = express.Router();
const cargaProductoController = require('../controllers/cargaProductoController');

router.get('/',cargaProductoController.cargaProducto);/*Formulario de carga de producto*/
router.post('/', cargaProductoController.cargaProducto); /*(enviar producto agreado a archivo json)*/
router.get('/', cargaProductoController.listadoProductos); /*Listado de todos los productos cargados*/


/*
faltan agregar funcionalidad en cargaProductoController.js

router.get('/products/:id',cargaProductoController.detalleDeProducto); Detalle de un producto determinado
router.get('/products/:id/edit', cargaProductoController.editar); Formulario de edicion de productos
router.put('products/:id',cargaProductoController.editado); Enviar producto editado a archivo json
router.delete('/products/:id',cargaProductoController.eliminado); Borrar producto del json
*/

module.exports = router;