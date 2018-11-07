/*
包的导入规则:
(1)导入包的时候, 会先在包的根目录, 查找package.json文件
(2)如果有pacakge.json文件, 则查找文件中的main属性
(3)如果能找到main属性, 加载main属性指向的那个文件
(4)如果文件加载成功, 则导包成功
 */
const calc = require('./mycalc')

console.log(calc.add(1, 1)) // 2
console.log(calc.subtract(2, 1)) // 1