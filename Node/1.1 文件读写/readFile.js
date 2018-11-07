// 导入模块
const fs = require('fs')

// 异步读取文件
fs.readFile('./files/input.txt', (err, data) => {
	// 读取文件错误
	if (err) return console.log(err.message)

	console.log(data + '')
})