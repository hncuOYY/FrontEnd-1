const fs = require('fs')

console.log('start')

// 异步读取文件
fs.readFile(__dirname + '\\files\\input.txt', 'utf8', (err, data) => {
	console.log(data)
})
console.log(1)

// 同步读取文件
let data = fs.readFileSync(__dirname + '\\files\\copied.txt', 'utf8')
console.log(data)
console.log(2)
