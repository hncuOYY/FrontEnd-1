const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((request, response) => {
	const url = request.url
	// 客户端请求的url地址与服务器上文件的路径对应
	readStaticFile(response, url)
}).listen(8888, () => {
	console.log('server running at http://127.0.0.1:8888/')
})

function readStaticFile(response, url) {
	fs.readFile(path.join(__dirname, url), (err, data) => {
		if (err) response.end('error')

		response.end(data)
	})
}