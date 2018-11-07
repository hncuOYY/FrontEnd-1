// 导入模块
const http = require('http')

// 创建服务器, 并启动服务器
http.createServer((request, response) => {
	// 获取请求地址
	const url = request.url
	// 获取请求方式
	const method = request.method

	response.writeHeader(200, {'Content-Type': 'text/html charset=utf8'})

	if (method === 'GET' && url === '/index.html')
		response.end('首页')
	else if (method === 'GET' && url === '/help.html')
		response.end('帮助')
	else if (method === 'POST' && url === '/about.html')
		response.end('关于')
	else 
		response.end('访问出错!')
}).listen(8888, () => {
	console.log('server running at http://127.0.0.1:8888/')
})