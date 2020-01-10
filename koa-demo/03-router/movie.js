const Router = require('koa-router')

const router = new Router()

router.get('/comingsoon', (ctx) => {
  ctx.body = 'comingsoon'
})

router.post('/comingsoon', (ctx) => {
  ctx.body = ctx.request.body
})

router.get('/hotshow', (ctx) => {
  ctx.body = 'hotshow'
})

module.exports = router
