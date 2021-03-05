const Router = require('@koa/router');
const { data } = require('jquery');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router({
    prefix: '/auth',
});

router.post('/register', async(ctx) =>{
    const {
        account,
        password,
    } = ctx.request.body;

    const one = await User.findOne({
        account,
    }).exec();

    if(one){
        ctx.body ={
            code:0,
            msg: '已存在该用户',
            data: null,
        };
        return;
    };

    const user = new User({
        account,
        password,
    });
    // const User = new User({
    //     account: '',
    //     password: '',
    // });

    const res = await user.save();

    ctx.body ={
        code:1,
        msg: '注册成功',
        data: res,
    };
  
});

router.post('/login', async(ctx) =>{
    ctx.body = '登录成功';
  });
module.exports = router;