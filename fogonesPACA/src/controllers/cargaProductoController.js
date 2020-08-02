const fs = require ('fs');
const path = require('path');

const indexController = {

    cargaProducto:function(req, res){
        res.render('cargaProducto')
    },

    cargarProducto:function(req, res, next){
        
        let producto = {   
            /* asigno el id con date.now()*/
            id:  Date.now(),
            name: req.body.name,
            description: req.body.description,
            /* aca saca los nombres que le da multer con date.now()(tiene 3 posiciones el array req.files[2])*/
            image: (req.files[0] == undefined) ? 'empty' : req.files[0].filename,
            image1: (req.files[1] == undefined) ? 'empty' : req.files[1].filename,
            image2: (req.files[2] == undefined) ? 'empty' : req.files[2].filename,

            stock: req.body.stock,
            price: req.body.price,
        };

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

    eliminar:function(req,res){
        let archivoProducto = fs.readFileSync('./data/productos.json', {encoding:'utf-8'});
        let productos = JSON.parse(archivoProducto);

        productos = productos.fitler(producto => producto.id != req.params.id)

        productosJSON = JSON.stringify(productos);
        fs.writeFileSync('./data/productos.json', productosJSON);
        
        res.redirect("eliminado")
    },
    eliminado:function(req,res){
        res.render("listdoDeProductos")
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