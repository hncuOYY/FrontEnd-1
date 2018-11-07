const fs = require('fs')

fs.writeFile('./files/output.txt', '毛主席万岁', err => {
	if (err) return console.log(err.message)

	console.log('写入文件成功')
})