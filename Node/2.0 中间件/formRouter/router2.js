const express = require('express')
const router = express.Router()

router.post('/index.html', (req, res) => {
    res.send('服务器接收到的表单数据: ' + JSON.stringify(req.body));
})

module.exports = router