const koa = require('koa');//请求库
const getYearByTimeStamp =   require('./helpers/units/index');

console.log(getYearByTimeStamp(new Date().getTime()));
const app = new koa();//实例化

//context =>ctx
//app.use((ctx) =>{
//const{ path ='/'} = ctx;

//if(path === '/user/123'){
 //   ctx.body = '返回用户123信息';}

//if(path === '/settings'){
  //  ctx.body = '返回一些用户设置的信息';
//}
//});

app.listen(3000,() => {
    console.log('启动成功');
});

console.log('112233');