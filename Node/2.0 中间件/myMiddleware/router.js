const express = require('express')
const router = express.Router()

router.get('/index.html', (req, res) => {
    res.send('欢迎访问首页')
})

router.post('/about.html', (req, res) => {
    res.send('公司详情介绍')
})

module.exports = router