
//导包
const express = require('express');
const router = express.Router();
const c_user = require('./controllers/c_user');
// 3.路由配置
router.get('/',c_user.showSignin);

module.exports = router;