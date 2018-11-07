const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer(
	(request, response) => {
		const url = request.url

		if (url === '/') {
			fs.readFile(path.join(__dirname, 'views/newIndex.html'), (err, data) => {
				if (err) response.end('error')

				response.end(data)
			})
		}

		else if (url !== '/') {
			readStaticFile(response, url)
		}

		else {
			response.end('error')
		}

	}
).listen(8888, () => {
	console.log('server running at http://127.0.0.1:8888/')
})

function readStaticFile(response, url) {
	fs.readFile(path.join(__dirname, url), (err, data) => {
		if (err) response.end('error')

		response.end(data)
	})
}