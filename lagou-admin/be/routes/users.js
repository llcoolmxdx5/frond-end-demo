var express = require('express');
var router = express.Router();
var UserControler = require('../controller/UserController'); 
/* GET users listing. */
router.post('/login', UserControler.login);

router.post('/signin', UserControler.signin);

module.exports = router;
