const fs = require ('fs');
const path = require('path');

const indexController = {

    cargaProducto:function(req, res){
        res.render('cargaProducto')
    },

    cargarProducto:function(req, res){
        let producto = {   
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            stock: req.body.stock,
            price: req.body.price
        }

                                            /*path.join(__dirname,*/
        let archivoProducto = fs.readFileSync('./data/productos.json', {encoding:'utf-8'});
        let productos;
        if(archivoProducto == ""){
            productos = [];
        }else {
            productos = JSON.parse(archivoProducto);
        }
        productos.push(producto);
        
        productosJSON = JSON.stringify(productos);

        fs.writeFileSync('./data/productos.json', productosJSON);

        res.render('productoCargado');
      
    },

    listadoProductos:function(req, res){
        res.render('listadoDeProductos')
    },

/*
    detalleDeProducto:function(req, res){
        
    },


    editar:function(req, res){

    },

    editado:function(req, res){

    },

    eliminado:function(req, res){

    },

     productos:function(req, res){
        res.render('home')
    },
    */
}


module.exports = indexController;