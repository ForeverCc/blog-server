const Koa = require('koa');
const app = new Koa();

app.listen(8888,()=> {
    console.log('server is running at port 8888');
})