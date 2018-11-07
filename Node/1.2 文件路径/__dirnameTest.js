const fs = require('fs')
const path = require('path')

// 获取被读取文件的绝对路径
const abspathRead = path.join(__dirname, 'files/score.txt')

// 异步读取文件
fs.readFile(abspathRead, 'utf8', (err, data) => {
    if (err) return console.log(err.message)

    // 使用空格符号切割字符串, 返回一个数组
    const arrData = data.split(' ')

    let str = ''
    // 遍历数组, 格式化成绩数据
    arrData.forEach(item => {
        if (item.length > 0) {
            const newItem = item.split('=')

            const newScore = newItem[0] + ': ' + newItem[1] + '\n'
            str += newScore
        }
    })

    // 获取被写入文件的绝对路径
    const abspathWrite = path.join(__dirname, 'files/newScore.txt')
    // 异步写入文件
    fs.writeFile(abspathWrite, str, err => {
        if (err) return console.log(err.message)

        console.log('写入成功')
    })
})