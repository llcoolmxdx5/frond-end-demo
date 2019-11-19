var express = require('express');
var router = express.Router();
var PositionControler = require('../controller/PositionCtroller'); 
var uploadFile = require('../middlerware/uploadfile');
/* GET home page. */
// router.get('/', PositionControler.login.bind(PositionControler)});

router.post('/add', uploadFile, PositionControler.add.bind(PositionControler))

router.get('/list', PositionControler.list.bind(PositionControler))

module.exports = router;