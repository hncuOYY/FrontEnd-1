const express = require('express')
const path = require('path')

const app = express()

// 托管静态页面
app.use(express.static(path.join(__dirname, '../views')))

app.use('/assets', express.static(path.join(__dirname, '../assets')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
