const express = require ('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const path = require('path');
const multerCargaProducto = require ('../middleware/multerCargaProducto')
const loggedUserMiddleware = require ('../middleware/loggedUser')

router.get('/',homeController.welcome);
router.get('/home',homeController.home);
module.exports = router;  