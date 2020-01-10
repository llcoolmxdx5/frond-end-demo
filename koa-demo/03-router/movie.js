const Router = require('koa-router')

const router = new Router()

router.get('/comingsoon', (ctx) => {
  ctx.body = 'comingsoon'
})

router.get('/hotshow', (ctx) => {
  ctx.body = 'hotshow'
})

module.exports = router