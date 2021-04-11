const Koa = require('koa')
const Router = require('koa-router')
const movieRouter = require('./movie')
const theaterRouter = require('./theater')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

// app.use(async ctx => {
//   ctx.body = 'hello world'
// })
const router = new Router()
router.use('/movie', movieRouter.routes())
router.use('/theater', theaterRouter.routes())

app.use(router.routes())

app.listen(3333, () => {
  console.log('localhost:3333 start')
})
