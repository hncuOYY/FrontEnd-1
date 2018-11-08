// 导入mysql模块
const mysql = require('mysql')

// 创建数据库的连接对象
const connetion = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mybase'
})

// 调用connect()连接上数据库服务器
connetion.connect()

// 调用connection.query()来指定执行的SQL语句
const sqlStr = 'select * from users'

// 执行SQL语句
connetion.query(sqlStr, (err, results) => {
  // null
  console.log(err)
  // [ RowDataPacket { id: 1, username: 'oyy', age: '18', gender: 'male', isdel: '0' } ]
  console.log(results)
})
