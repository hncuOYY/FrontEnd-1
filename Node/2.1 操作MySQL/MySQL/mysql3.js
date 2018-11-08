// 导入mysql模块
const mysql = require('mysql')

// 创建数据库的连接对象
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mybase'
})

// 调用connect()连接数据库服务器
connection.connect()

// 删除数据
const sqlStr = 'delete from users where id=?'

connection.query(sqlStr, 4, (err, results) => {
  if (err) return console.log(err.message)
  console.log(results)
})
