const express = require('express');
const app = express();
const rutaLogin = require('./routes/login');


app.listen(3030,() => console.log("Server corriendo en puerto 3030"));
app.use('/login',rutaLogin);
app.set('view engine', 'ejs');
app.use(express.static(__dirname+ '/public'));