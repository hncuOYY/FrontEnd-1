const express = require('express')
const app = express()

// 导入记录日志的中间件
const writeLogs = require('./writeLogs.js')

// 注册中间件
app.use(writeLogs)

// 导入路由模块
const router = require('./router.js')
app.use(router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
