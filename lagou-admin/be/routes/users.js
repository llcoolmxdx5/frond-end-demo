var express = require('express');
var router = express.Router();
var UserControler = require('../controller/UserController'); 
/* GET users listing. */
router.post('/login', UserControler.login.bind(UserControler));

router.post('/signin', UserControler.signin.bind(UserControler));

router.get('/isLogin', UserControler.isLogin.bind(UserControler))

module.exports = router;
