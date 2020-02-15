const Koa = require('koa');
const Router = require('@koa/router');
const bodyparser = require('koa-bodyparser');
const userRouter = require('./src/router/user');
const app = new Koa();
const router = new Router();

app.use(bodyparser());
//装在子路由
router.use('', userRouter.routes(), userRouter.allowedMethods())

app
    .use(router.routes())
    .use(router.allowedMethods());
    
app.listen(8888,()=> {
    console.log('server is running at port 8888');
})