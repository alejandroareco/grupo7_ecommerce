const indexController = {
    login:function(req, res){
        res.render('login')
    },
    sesion:function(req,res){
        res.render('usuarioLogueado')
    },
}   

module.exports = indexController;