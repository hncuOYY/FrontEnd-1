const fs = require('fs')

// 读取一个目录的内容
fs.readdir(__dirname, (err, files) => {
	// [ 'files', 'readdir.js', 'stats.js' ]
	console.log(files)
})