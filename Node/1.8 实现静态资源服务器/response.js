const http = require('http')

http.createServer((request, response) => {
	// 设置返回内容的编码格式
	response.writeHeader(200, {'Content-Type': 'text/html charset=utf8'})
	// request.method获取客户端请求的URL地址, request.url获取客户端请求的类型
	response.end('请求类型: ' + request.method + '\n请求的URL地址: ' + request.url)
}).listen(8888, () => {
	console.log('server running at http://127.0.0.1:8888/')
})