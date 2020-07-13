const express = require ('express');
const router = express.Router();
const cargaProductoController = require('../controllers/cargaProductoController');

router.get('/',cargaProductoController.cargaProducto);

module.exports = router;