function userCookie(req, res, next){
    if(req.cookies.userCookie != undefined){
        req.session.user = req.cookies.userCookie;
        //console.log("Se creo una session a traves de la cookie guardada")
    }
    next();
}

module.exports = userCookie;