const express = require('express')

const app = express()

app.post('/index.html', (req, res) => {
  console.log(req.query)
  res.end('获取参数成功')
})

app.get('/userinfo/:id/:name', (req, res) => {
  console.log(req.params)
  res.end('获取参数成功')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
