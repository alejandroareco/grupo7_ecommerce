const fs = require ('fs');
const path = require('path');
const bcrypt = require ('bcryptjs');
const {check, validationResult, body} = require('express-validator');//validator//


const loginController = {
    welcome:function(req, res){
        res.render('welcome')//agregue para 
    },
    home:function(req, res){
        res.render('home')
    },
    login:function(req, res){
        res.render('login')
    },
    sesion:function(req,res){
        res.render('logueado')
    },
    registro:function(req,res){
        res.render('registro')
    },
    registrado:function(req,res, next){
       
            let errores = validationResult(req);
            if(errores.isEmpty()) {
            res.render('registrado')
            } else {
            res.render('registro', {
            unosErrores: errores.errors
            })
        }
         

    let usuario = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,12),//
        avatar: req.files[0].filename,
        }
        //leer el archivo de usuarios que ya estaba//
        let archivoUsuario = fs.readFileSync(path.join(__dirname,'../data/user.json'), 'utf-8');
        let usuarios;
        if (archivoUsuario == "") {
            usuarios = []; //si no hay usuarios, creo un array de usuarios vacio//
        }else{
            usuarios = JSON.parse(archivoUsuario); //de lo contrario, descomprimo la lista para poder usarla//
        }

        usuarios.push(usuario); //a la lista, le agrego el usuario nuevo//

        //con la informacion actualizada, le empaqueto para poder ser utilizada//

        usuariosJSON = JSON.stringify(usuarios); 

        fs.writeFileSync(path.join(__dirname,'../data/user.json'), usuariosJSON);

        //finalmente, envio al usuario a la vista de usuario registrado//

        res.render('registrado');

    },

};


module.exports = loginController;
