const express = require('express');
const app = express();
const rutaLogin = require('./routes/login');
const rutaHome = require('./routes/home');


app.listen(3030,() => console.log("Server corriendo en puerto 3030"));
app.use('/login',rutaLogin);
app.use('/home',rutaHome);
app.use(express.static(__dirname+ '/public'));
app.set('view engine', 'ejs');