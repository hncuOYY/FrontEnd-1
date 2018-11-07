const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((request, response) => {
	const method = request.method
	const url = request.url

	if (method === 'GET' && url === '/views/index.html')
		readHTML(response, url)
	else if (method === 'GET' && url === '/views/help.html')
		readHTML(response, url)
	else if (method === 'POST' && url === '/views/about.html')
		readHTML(response, url)
	else 
		response.end('error')
}).listen(8888, () => {
	console.log('server running at http://127.0.0.1:8888/')
})

// 读取文件函数
function readHTML(response, url) {
	fs.readFile(path.join(__dirname, url), (err, data) => {
		if (err) return response.end('error')

		response.end(data)
	})
}