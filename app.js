const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

app.use(async (ctx,next)=>{
   console.log(`Progress ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
app.use(bodyParser());

app.use(controller());

app.listen(4000);
console.log('app started at port 4000..');