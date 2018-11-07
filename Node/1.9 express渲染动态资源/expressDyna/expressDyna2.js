const express = require('express')
const path = require('path')

const app = express()

// 配置模版引擎
app.set('view engine', 'ejs')

// 配置模版引擎页面的存放路径
app.set('views', 'views')

// 导入路由模块
const router = require('./router.js')

// 将路由对象注册到app服务器上,每当有请求
// 过来, 就可以调用路由模块来分发处理请求
app.use(router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
