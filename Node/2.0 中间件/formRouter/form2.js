const express = require('express')
const app = express()

// 导入解析表单数据的中间件
const parseForm = require('./parseForm.js')
// 注册解析表单的中间件
app.use(parseForm)

// 导入路由模块
const router = require('./router2.js')
// 注册路由模块
app.use(router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
