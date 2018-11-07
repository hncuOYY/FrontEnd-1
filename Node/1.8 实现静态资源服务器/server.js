// 导入Node中提供的核心模块http
const http = require('http')

// 创建服务器
http.createServer((request, response) => {
	// 发送响应数据'Hello World!'
	response.end('Hello World!')
}).listen(8888, () => {
	console.log('server running at http://127.0.0.1:8888/')
})