const indexController = {
    login:function(req, res){
        res.render('login')
    },
    sesion:function(req,res){
        res.render('logueado')
    },
    registro:function(req,res){
        res.render('registro')
    },
    registrado:function(req,res){
        res.render('registrado')
    },
}


module.exports = indexController;