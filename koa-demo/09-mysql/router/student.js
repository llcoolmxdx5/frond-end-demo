const Router = require('koa-router')
const stuController = require('../controller/student');

const router = new Router()

router.get('/list', stuController.list)

router.post('/add', stuController.add)

router.patch('/update', stuController.update)

router.delete('/remove', stuController.remove)

module.exports = router

