const fs = require ('fs');
const path = require('path');
const db = require('../database/models');
//const { delete } = require('../routes/productos');


const indexController = {
    
    carrito:function(req, res){
        res.render('carrito', {user:req.session.user})
    },
    productoAgregado:function(req,res){
        /*Agregar producto al carrito*/        
    },
    detalleProducto:function(req, res){
            db.Product.findByPk(req.params.id)
                .then(function(result) {
                    return res.render('detalleProducto', {
                        producto:result,
                        user:req.session.user
                    })
            })
    },
    home:function(req, res){
        res.render('home', {user:req.session.user})
    },

    cargaProducto:function(req, res){
        res.render('cargaProducto', {user:req.session.user})
    },

    cargarProducto:function(req, res, next){
        
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            /* aca saca los nombres que le da multer con date.now()(tiene 3 posiciones el array req.files[2])*/
            image: (req.files[0] == undefined) ? 'empty' : req.files[0].filename,
            image1: (req.files[1] == undefined) ? 'empty' : req.files[1].filename,
            image2: (req.files[2] == undefined) ? 'empty' : req.files[2].filename,
            stock: req.body.stock,
            price: req.body.price,

        });
        res.render('productoCargado', {user:req.session.user});
      
    },
    listadoProductos:function(req, res){
        res.render('listadoDeProductos', {user:req.session.user})
    },
    nosotros:function(req,res){
        res.render("nosotros", {user:req.session.user})
    },
    instructivo:function(req,res){
        res.render("instructivo", {user:req.session.user})
    },    
    panelProducto: function(req, res, next){
        db.Product.findAll()
            .then(function(result) {
            return res.render('panelProducto', {
                producto:result,
                user:req.session.user
            }, 
            )
        })
    },

    
    edit: function(req, res){
        db.Product.findByPk(req.params.id)
            .then(function(result) {
            return res.render('editProducto', {
                producto:result,
                user:req.session.user});
        })
    },


    editado:function(req, res, next){
        db.Product.update({
            name: req.body.name,
            description: req.body.description,
            /* aca saca los nombres que le da multer con date.now()(tiene 3 posiciones el array req.files[2])*/
            image: (req.files[0] == undefined) ? 'empty' : req.files[0].filename,
            image1: (req.files[1] == undefined) ? 'empty' : req.files[1].filename,
            image2: (req.files[2] == undefined) ? 'empty' : req.files[2].filename,
            stock: req.body.stock,
            price: req.body.price,
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
           return res.redirect('/productos/edit/'+req.params.id)
        })
    },
    
    borrado:function(req, res, next){
        db.Product.destroy({
                where: {
                id: req.params.id
            }
        })
        res.redirect("../panelProducto", {user:req.session.user})
        },

}


module.exports = indexController;