const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3333, () => {
  console.log('localhost:3333 start')
})
