const express = require('express')

const app = express()

// 获取查询参数
app.get('/userinfo/:id/:name', (req, res) => {
  console.log(req.params)
  res.end('获取参数成功')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
