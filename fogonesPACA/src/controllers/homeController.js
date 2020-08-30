const fs = require ('fs');
const path = require('path');
const db = require('../database/models');

const homeController = {
    welcome:function(req, res){
        res.render('welcome')
    },
    home: function(req, res, next){
        db.Product.findAll()
            .then(function(result) {
            return res.render('home',{producto:result,user:req.session.user});
             
        })
        
    },
    

    };

    module.exports = homeController