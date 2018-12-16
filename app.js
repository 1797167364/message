//1.导包
const express = require('express');
const router = require('./router');
// 2.配置包
const app = express();
// 3.使用路由/挂在路由
app.use(router);
// 4.监听端口
app.listen(7000,()=>{
  console.log('run=======');
})