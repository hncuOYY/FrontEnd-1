// 导入express模块
const express = require('express')

// 创建服务器
const app = express()

// 只监听get类型的请求
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
