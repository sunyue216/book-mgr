require('./Schemas/User');
const mongoose = require('mongoose');
 //给哪个数据库
 //哪个集合
 //添加什么格式的文档

//  const UserSchema = new mongoose.Schema({
//      nickname:String,
//      password:String,
//      age:Number,
//  });

//  const UserModal = mongoose.model('User',UserSchema);

const connect = () =>{
    return new Promise((resolve) => {

        //连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
//当数据库被打开，做···
mongoose.connection.on('open',() => {
    console.log('连接数据库成功');

    resolve();
    });
    


    //创建文档
    // const user = new UserModal({
    //     nickname:'小明',
    //     password:'123456',
    //     age:12,
    // });

    //保存，同步到Mongodb
    // user.save();
});
};

module.exports = {
    connect,
}