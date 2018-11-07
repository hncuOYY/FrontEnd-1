const fs = require('fs')
const path = require('path')

abspath = path.join(__dirname, 'files')

fs.stat(abspath, (err, stats) => {
	if (err) return console.log(err.message)
	
	console.log(stats.size) // 0
	console.log(stats.isFile()) // false
	console.log(stats.isDirectory()) // true
})