const express = require('express')

const app = express()

app.get('/index.html', (req, res) => res.send('首页'))

app.get('/help.html', (req, res) => res.send('帮助'))

// 只监听post类型的请求
app.post('/about.html', (req, res) => res.send('关于'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

