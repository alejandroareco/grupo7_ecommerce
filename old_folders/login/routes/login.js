const express = require ('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/',loginController.login);
router.post('/',loginController.sesion);
router.get('/registro',loginController.registro);
router.post('/registro',loginController.registrado);

module.exports = router;