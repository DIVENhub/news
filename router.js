// 路由模块
// 导包
const express = require('express');

// 获取对象router
const router = express.Router();

// router.get
router.get('/signin', (req, res) => {
    res.send('router.js监听请求并实现处理函数');
});

// 导出模块
module.exports = router;