// 导入moment模块
const moment = require('moment')

console.log(moment()) // moment("2018-11-08T15:15:02.381")
const dataStr = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dataStr) // 2018-11-08 15:15:57

