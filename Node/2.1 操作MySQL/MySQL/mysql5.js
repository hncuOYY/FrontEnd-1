const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mybase'
})

connection.connect()

// 使用isdel字段实现软删除
const sqlStr = 'update users set isdel=1 where id=2'
connection.query(sqlStr, (err, results) => {
  if (err) return console.log(err.message)

  console.log(results)
})

// 查找isdel=0的数据
const sqlStr2 = 'select * from users where isdel=0'
connection.query(sqlStr2, (err, results) => {
  if (err) return console.log(err.message)

  console.log(results)
})
