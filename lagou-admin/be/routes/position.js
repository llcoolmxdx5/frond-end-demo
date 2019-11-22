var express = require('express');
var router = express.Router();
var PositionControler = require('../controller/PositionCtroller');
var uploadFile = require('../middlerware/uploadfile');
var auth = require('../middlerware/auth');
/* GET home page. */
// router.get('/', PositionControler.login.bind(PositionControler)});

router.use(auth)

router.post('/add', uploadFile, PositionControler.add.bind(PositionControler))

router.get('/list', PositionControler.list.bind(PositionControler))

router.delete('/del', PositionControler.del.bind(PositionControler))

router.get('/findone', PositionControler.findOne.bind(PositionControler))

router.post('/updata', uploadFile, PositionControler.update.bind(PositionControler))

module.exports = router;
