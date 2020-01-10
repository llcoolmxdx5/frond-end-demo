const Koa = require('koa')
const logAsync = require('./log')

const app = new Koa()

app.use(logAsync())

app.use(async (ctx, next) => {
  console.log('1 next 之前')
  await next()
  console.log('1 next 之后')
})

app.use(async (ctx, next) => {
  console.log('2 next 之前')
  await next()
  console.log('2 next 之后')
})

app.use(async (ctx, next) => {
  console.log('3 next 之前')
  await next()
  console.log('3 next 之后') // 1 2 3 3 2 1 洋葱模型
})

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3333, () => {
  console.log('localhost:3333 start')
})
