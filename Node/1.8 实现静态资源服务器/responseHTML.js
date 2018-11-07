const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((request, response) => {
	const method = request.method
	const url = request.url

	if (method === 'GET' && url === '/views/index.html') {
		fs.readFile(path.join(__dirname, '/views/index.html'), (err, data) => {
			if (err) return response.end('页面不存在')
			// response.end([data][, encoding][, callback])
			response.end(data)
		})
	}

	else if (method === 'GET' && url === '/views/help.html') {
		fs.readFile(path.join(__dirname, '/views/help.html'), (err, data) => {
			if (err) return response.end('页面不存在')

			response.end(data)
		})
	}

	else if (method === 'POST' && url === '/views/about.html') {
		fs.readFile(path.join(__dirname, '/views/help.html'), (err, data) => {
			if (err) return response.end('页面不存在')

			response.end(data)
		})
	}

	else {
		response.end('errors!')
	}
}).listen(8888, () => {
	console.log('server running at http://127.0.0.1:8888/')
})
