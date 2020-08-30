const fs = require('fs');//requiero fs para poder buscar si el usuario esta registrado//
const path = require ('path');
const {check, validationResult, body} = require('express-validator');//requiero validator a travez del destructuting//


module.exports = [
   check('passw')
      .isLength({min:8, max: 16})
      .withMessage('La contraseña tiene que tener un mínimo de 8 caracteres y un máximo de 16'),


   check('email')
      .isEmail()
      .withMessage('Tenés que ingresar un email válido. Recorda usar @'),
]

