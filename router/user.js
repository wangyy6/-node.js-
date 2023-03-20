// 1.导入 express 模块
const express = require('express');
// 2.创建路由对象
const router = express.Router();
 
// 5.导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')
 
// 3.挂载路由
// 注册新用户
router.post('/reg', user_handler.reg);
// 登录
router.post('/login', user_handler.login);
 
// 4.暴露router模块
module.exports = router;
