// 导入moment模块
const moment = require('moment')

console.log(moment()) // moment("2018-11-08T15:15:02.381")
const dataStr = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dataStr) // 2018-11-08 15:15:57

/**
 * 包的查找规则:
 * (1)会根据包的名称, 直接在当前项目的根目录中查找node_modules文件夹
 * (2)存在, 则在node_modules中查找模版引用文件夹
 * (3)存在, 则在模块对应的文件夹中查找package.json文件
 * (4)存在, 则查找package.json文件中的main属性, 并尝试加载main指定的文件作为入口
 * (5)如果能正常加载main属性中的指定的文件, 则模块/包加载成功
 * (6)如果在package.json文件中, 没有main属性, 则会一次加载包根目录中的index.js, index.json, index.node
 * (7)如果在包的根目录中, 没有package.json文件或者在node_modules目录中没有index相关的文件
 *  或者在项目根目录中根本没有node_modules, 则会去上层目录中查找node_modules, 查找规则同上
 * (8)如果在上一层目录中还是没有找到对应的模块, 则继续向上查找, 直到项目所在的磁盘根目录位置
 * (9)如果磁盘根目录也没有, 会报错
 */
