require('./m1.js')
require('./m2.js')

// 使用global全局对象暴露成员, 会造成全局变量的污染
console.log(global.m1)
console.log(global.m2)