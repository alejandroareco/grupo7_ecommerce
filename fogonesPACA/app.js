const express = require('express');
const app = express();
const rutaLogin = require('./src/routes/users');
const rutaCargaProducto = require('./src/routes/cargaProducto');
const {check, validationResult, body} = require('express-validator'); //validator//
const methodOverride = require ('method-override');/*PUT Y DELETE*/
const session = require ('express-session');

app.listen(4000,() => console.log("Server corriendo en puerto 4000"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));/*PUT Y DELETE*/
app.use(session({secret:'ESTE ES UN SECRETO'})); /*SESSION*/



app.use('/',rutaLogin);
app.use('/login',rutaLogin);
app.use('/cargaProducto',rutaCargaProducto);

app.use(express.static(__dirname+ '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs'); 