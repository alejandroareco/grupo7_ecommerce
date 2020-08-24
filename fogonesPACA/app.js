const express = require('express');
const app = express();
const rutaLogin = require('./src/routes/users');
const rutaProductos = require('./src/routes/productos');
const {check, validationResult, body} = require('express-validator'); //validator//
const methodOverride = require ('method-override');/*PUT Y DELETE*/
const session = require ('express-session');
const cookieParser = require ('cookie-parser');
const userCookie = require ('./src/middleware/userCookie');

app.use(express.static(__dirname+ '/public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));/*PUT Y DELETE*/
app.use(session({
    secret:'ESTE ES UN SECRETO',
    resave: false,
    saveUninitialized: true
})); /*SESSION*/

app.use(cookieParser());
app.use(userCookie);



app.use('/',rutaLogin);
app.use('/login',rutaLogin);
app.use('/productos',rutaProductos);

app.listen(4000,() => console.log("Server corriendo en puerto 4000"));