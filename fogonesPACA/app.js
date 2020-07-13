const express = require('express');
const app = express();
const rutaLogin = require('./routes/login');
const rutaHome = require('./routes/home');
const rutaCarrito = require("./routes/carrito");
const rutaCargaProducto = require("./routes/cargaProducto");
const rutaDetalleProducto = require("./routes/detalleProducto");

app.listen(3030,() => console.log("Server corriendo en puerto 3030"));
app.use('/login',rutaLogin);
app.use('/home',rutaHome);
app.use("/carrito",rutaCarrito);
app.use("/cargaProducto",rutaCargaProducto);
app.use("/detalleProducto", rutaDetalleProducto); 

app.use(express.static(__dirname+ '/public'));
app.set('view engine', 'ejs'); 