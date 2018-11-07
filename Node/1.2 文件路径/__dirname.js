const fs = require('fs')
const path = require('path')

// __dirname: 当前模块的文件夹名称
const abspath = path.join(__dirname, 'files/input.txt')

// 相对路径是相对于node命令所在目录的路径
fs.readFile('abspath', (err, data) => {
	if (err) return console.log('文件路径错误!')
	console.log(data + '')
})

