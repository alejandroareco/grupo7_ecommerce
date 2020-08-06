const multer = require('multer'); /*requeri multer*/


/*ruta de almacenamiento de imagen*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/fotosProductosNuevos')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  module.exports = multer({ storage: storage });