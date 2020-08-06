const multer = require ('multer');



// multer //

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/img/user')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

module.exports = multer ({storage:storage});