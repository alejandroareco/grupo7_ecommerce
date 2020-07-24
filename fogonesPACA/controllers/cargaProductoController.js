const indexController = {

    cargaProducto:function(req, res){
        res.render('cargaProducto')
    },

    listadoProductos: function(req, res){
        res.render('home')
    },

    crearProducto:function(req, res){
        let producto = {   
            id: req.body.id,
            name: req.body.name,
            description: req.body.name,
            image: req.body.image,
            stock: req.body.stock,
            price: req.body.price
        }
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

        res.render('home');
      
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