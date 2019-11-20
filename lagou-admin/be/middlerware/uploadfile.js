const multer = require('multer')
const path = require('path')
const bcrypt = require('bcrypt');

function uploadFile(req, res, next) {
  let filename = ''
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/upload/'))
    },
    filename: function (req, file, cb) {
      let extname = path.extname(file.originalname) // 上传的图片后缀名
      // console.log(bcrypt.hashSync(file.fieldname, 10))
      filename = `${new Date - 0}${extname}`
      cb(null, filename)
    }
  })
  let upload = multer({ storage }).single('companyLogo') // 提交的图片字段名
  upload(req, res, err => {
    if (err) {
      console.log(err)
    } else if (!req.file) {
      delete req.body['companyLogo'];
      next();
    } else {
      req.body.companyLogo = filename
      next()
    }
  })
}
module.exports = uploadFile