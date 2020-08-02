const express = require('express');
const app = express();
const rutaLogin = require('./src/routes/users');
const rutaHome = require('./src/routes/home');
const rutaCarrito = require('./src/routes/carrito');
const rutaCargaProducto = require('./src/routes/cargaProducto');
const rutaDetalleProducto = require('./src/routes/detalleProducto');
const {check, validationResult, body} = require('express-validator'); //validator//
const methodOverride = require ('method-override');/*PUT Y DELETE*/

app.listen(4000,() => console.log("Server corriendo en puerto 4000"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));/*PUT Y DELETE*/




app.use('/login',rutaLogin);
app.use('/home',rutaHome);
app.use('/carrito',rutaCarrito);
app.use('/cargaProducto',rutaCargaProducto);
app.use('/detalleProducto', rutaDetalleProducto); 

app.use(express.static(__dirname+ '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs'); 