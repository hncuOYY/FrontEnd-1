const express = require('express')
const querystring = require('querystring')

const router = express.Router()

router.post('/index.html', (req, res) => {
  /**
   * 如何在这里拿到POST提交过来的表单数据
   *  express这个框架并没有帮我们解析表单数据
   *  req的data事件被触发的时候, 就表示有表单数据提交过来
   */
  let dataStr = ''
  // date事件可能触发多次
  req.on('data', chunk => {
    dataStr += chunk
  })
  // 数据完毕触发
  req.on('end', () => {
    console.log(dataStr) // name=oyy&age=16

    const result = querystring.parse(dataStr)
    console.log(result) // { name: 'oyy', age: '16' }

    // JSON.stringify: 从一个对象中解析出字符串
    res.send('服务器拿到POST表单' + JSON.stringify(result))
  })
})

module.exports = router