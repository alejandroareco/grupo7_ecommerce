const fs = require ('fs');
const path = require('path');

const homeController = {
    welcome:function(req, res){
        res.render('welcome')
    },
    home:function(req, res){
        res.render('home',{
            user:req.session.user
        });
        },
    };


    module.exports = homeController