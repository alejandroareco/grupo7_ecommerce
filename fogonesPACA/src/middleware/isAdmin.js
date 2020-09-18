
let db = require('../database/models');

function isAdmin (req ,res, next) {
    db.User.findOne({
        where: { email: req.session.user}
    })
    
    .then(function(result) {
        console.log( result.dataValues.admin) 
        
    if (req.session.user && result.dataValues.admin =='admin') {
        console.log("administrador")
        
        next()
    } else {
        res.status(404).render("Error404")
    }})
}


module.exports = isAdmin