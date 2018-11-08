const express = require('express')
const app = express()

// 导入解析表单数据的body-parser中间件
const bodyParser = require('body-parser')

// extended: false表示使用Node内置的querystring模块来解析表单数据
// urlencoded表示解析普通的表单数据
app.use(bodyParser.urlencoded({ extended: false }))

// 导入自己的路由模块
const router = require('./router2.js')
app.use(router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
