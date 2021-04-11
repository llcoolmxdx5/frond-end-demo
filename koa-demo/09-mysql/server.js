const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');
const stdRouter = require('./router/student')

const app = new Koa()

const router = new Router()

app.use(bodyParser())

router.use('/student', stdRouter.routes())

app.use(router.routes())

app.listen(3333, () => {
  console.log('localhost:3333 start')
})
