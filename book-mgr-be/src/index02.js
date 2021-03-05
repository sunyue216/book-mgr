const koa = require('koa');
const Router = require('@koa/router');


const app = new koa();

const authRouter =new Router({
    prefix: '/auth'
});

authRouter.get('/register', async (ctx) => {
    ctx.body = '注册成功';
});

const bookRouter =new Router({
    prefix: '/book'
});

bookRouter.get('/add', async (ctx) => {
    ctx.body = '添加成功';
});

app.use(authRouter.routes());
app.use(bookRouter.routes());
//通过app.use注册中间件
//中间件本质  是一个函数
//context 上下文 当前请求的相关信息都在里面
// app.use((context) => {
//     const { request :req} = context;
//     const { url } =req;

//     if(url === '/user'){
//         context.response.body = 'abcde';
//         return;
//     }
//     context.body = '??';
// });

//开启一个http服务
//接受http请求 并作出处理，处理完响应
app.listen(3000,() =>{
    console.log('启动成功');
});