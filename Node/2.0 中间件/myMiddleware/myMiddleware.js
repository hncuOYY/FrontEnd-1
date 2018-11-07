const fs = require('fs')
// 导入express模块
const express = require('express')
const path = require('path')
// 创建exprss的服务器实例
const app = express()

app.use(myMiddleware)

app.get('/', (req, res) => res.send('这是服务器处理的GET结果'))

app.post('/index.html', (req, res) => res.send('用POST方法访问首页'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// 中间件是一个路由的处理函数
// 定义一个写入日志的中间件
function myMiddleware(req, res, next) {
	const infoStr = `${new Date().toLocaleString()}  ${req.url}  ${req.method}\n`;

	fs.appendFile(path.join(__dirname, './info.txt'), infoStr, err => {
		if (err) return console.log('写入失败');

		console.log('写入成功');
	});
	// 调用next函数, 让处理过程进入到下一个处理环节
	next()
}







