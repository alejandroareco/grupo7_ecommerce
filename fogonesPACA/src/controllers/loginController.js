const fs = require ('fs');
const path = require('path');
const bcrypt = require ('bcryptjs');
const {check, validationResult, body} = require('express-validator');//validator//
let db = require('../database/models');


let usuarios = fs.readFileSync(path.join(__dirname, '../data/user.json'), 'utf8');
usuarios = JSON.parse(usuarios); //VARIABLE PARA LEER LOS USUARIOS REGISTRADOS //


const loginController = {
    //welcome:function(req, res){
    //    res.render('welcome')//agregue para 
    //},
    //home:function(req, res){
    //    res.render('home',{
    //        user:req.session.user
    //    });
    //},

    login:function(req, res){
        res.render('login')
    },
    sesion: function(req, res) {  
        user = req.session.user      
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            for(let i = 0; i < usuarios.length; i++) {
                if(usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                    req.session.user = usuarios[i].email
                    
                    if(req.body.remember == "on") {
                        res.cookie('userCookie', usuarios[i].email, {maxAge:60000 * 5})
                    }

                    return res.render('logueado',{
                        user:req.session.user
                    });
                }
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Credenciales inválidas. Inserta un email y contraseña registrados'
                    }
                }
            })

        } else {
            res.render('login', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    registro:function(req,res){
        res.render('registro')
    },

    //funcionalidad para grabar SQL / tambien modifique el modelo para poder grabar (ramiro)

    registrado:function(req,res, next){
        db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            passw: bcrypt.hashSync(req.body.passw,12),
            address: req.body.address,
            phone: req.body.phone,
            avatar: (req.files[0] == undefined) ? 'empty' : req.files[0].filename
        });
        res.render('registrado');

        //silencie el grabado del JSON me daba errores con la validacion /////////////////////////////////////////////
        /*

        let errores = validationResult(req);
            if(errores.isEmpty()) {
            res.render('registrado', {
                user:req.session.user
            })
            } else {
            res.render('registro', {
            unosErrores: errores.errors
            })
        }
         
        let usuario = {
        firstname: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        passw: bcrypt.hashSync(req.body.password,12),//
        avatar: (req.files[0] == undefined) ? 'empty' : req.files[0].filename
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
        res.render('registrado');*/
    },

    
    edit: function(req, res){
       
    },


    editado:function(req, res, next){
        db.User.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            passw: bcrypt.hashSync(req.body.passw,12),
            address: req.body.address,
            phone: req.body.phone,
            avatar: (req.files[0] == undefined) ? 'empty' : req.files[0].filename
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
           return res.redirect('mi cuenta')
        })
    },


    
    borrado:function(req, res, next){
        db.User.destroy({
                where: {
                id: req.params.id
            }
        })
        res.redirect("/panel")
    },


    miCuenta:function(req,res, next){
        db.User.findOne({ where: { email: req.session.user } })
        .then(function(result) {
            //res.send(response)
        return res.render('miCuenta',
        {user:result});
    })
        
        res.render('miCuenta')
    },


    logout: function(req,res){
        req.session.destroy();
        res.redirect('/login')
    },


    panelUser: function (req, res, next){
        db.User.findAll()
        .then(function(response){
         //res.send(response)
        res.render('panelUsuario', {
        usuario:response}
        )})
    },

};


module.exports = loginController;