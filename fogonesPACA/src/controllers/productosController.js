const fs = require ('fs');
const path = require('path');
const db = require('../database/models');
//const { delete } = require('../routes/productos');

const indexController = {
    carrito:function(req, res){
        res.render('carrito')
    },
    productoAgregado:function(req,res){
        /*Agregar producto al carrito*/        
    },
    detalleProducto:function(req, res){
        res.render('detalleProducto')
    },
    home:function(req, res){
        res.render('home')
    },

    cargaProducto:function(req, res){
        res.render('cargaProducto')
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
        res.render('productoCargado');
      
    },
    listadoProductos:function(req, res){
        res.render('listadoDeProductos')
    },
    nosotros:function(req,res){
        res.render("nosotros")
    },    
    panelProducto: function(req, res, next){
        db.Product.findAll()
            .then(function(result) {
            return res.render('panelProducto',
            {producto:result});
        })
    },

    
    edit: function(req, res){
        db.Product.findByPk(req.params.id)
            .then(function(result) {
            return res.render('editProducto',
            {producto:result});
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
           return res.redirect('/edit/'+req.params.id)
        })
    },
    
    borrado:function(req, res, next){
        db.Product.destroy({
                where: {
                id: req.params.id
            }
        })
        res.redirect("/panelProducto")
        }

}


module.exports = indexController;