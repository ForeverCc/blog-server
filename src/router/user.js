/*
 * @Description: 撸码一时爽，一直撸码一直爽！
 * @Author: rainycc
 * @Date: 2020-02-15 17:10:19
 * @LastEditors  : rainycc
 * @LastEditTime : 2020-02-15 17:24:03
 */

const Router = require('@koa/router');

const userRouter = new Router({
    prefix: '/v1'
});

userRouter.post('/user/register', async (ctx, next) => {
    ctx.body = {
        code:'200',
        message: '注册接口',
        body: ctx.request.body
    }
});

userRouter.post('/user/login', async (ctx, next) => {
    ctx.body = {
        code:'200',
        message: '登录接口'
    }
});

module.exports = userRouter;

