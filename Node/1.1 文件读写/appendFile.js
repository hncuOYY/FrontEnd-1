const fs = require('fs')

fs.appendFile('./files/appent.txt', '\n天天向上', err => {
	if (err) return console.log(err.message)

	console.log('追加文件')
})