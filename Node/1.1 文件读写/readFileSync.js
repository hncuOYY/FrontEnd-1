const fs = require('fs')
const path = require('path')

abspath = path.join(__dirname, 'files/copied.txt')

// 同步读取文件
const data = fs.readFileSync(abspath, 'utf8')

console.log(data) // 好好学习,天天向上