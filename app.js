const Koa = require('koa')

var cors = require('koa-cors')

var route = require('koa-route')

const bodyParser = require('koa-bodyparser')

const controller = require('./controller')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Progress ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

app.use(cors())

app.use(bodyParser())

app.use(controller())

app.listen(4000)

console.log('app started at port 4000..')