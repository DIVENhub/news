// 项目的入口文件
// 1.导包
const express = require('express');
const router = require('./router');
// 2.app对象
const app = express();

// 3.路由配置

app.use(router);
// 4.监听端口
app.listen(12346, () => {
    console.log('run it---');
})