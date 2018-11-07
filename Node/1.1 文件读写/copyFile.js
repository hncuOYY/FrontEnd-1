const fs = require('fs')

fs.copyFile('./files/copied.txt', 'files/copy.txt', err => {
	if (err) return console.log(err.message)

	console.log('复制成功')
})	