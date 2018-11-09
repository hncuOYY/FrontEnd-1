const querystring = require('querystring')

// 定义一个解析表单数据的中间件
function parseForm (req, res, next) {
  let dataStr = ''

  // data事件, 可能会触发多次, 因此每次拿
  // 到一部分数据, 一定要拼接到dataStr上
  req.on('data', chunk => {
    dataStr += chunk
  })

  // 数据接收完毕, 触发req的end事件
  req.on('end', () => {
    const result = querystring.parse(dataStr)
    // 怎样将result传递给下一个中间件或路由
    req.body = result
    next()
  })
}

module.exports = parseForm
