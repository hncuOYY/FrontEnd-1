const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mybase'
})

// 插入的数据
const p = {
  username: 'jack',
  age: 20,
  gender: 'male'
}

/*
const sqlStr = 'insert into users (username, age, gender) values("' + p.username + '",' + p.age + ',"' + p.gender + '")'

connection.query(sqlStr, (err, results) => {
  // 执行失败
  if (err) return console.log(err.messgae)
  // 执行成功
  console.log(results)
})
*/
// ?表示占位符, 仅限于Node中操作MySQL的时候使用
const sqlStr = 'insert into users set ?'

connection.query(sqlStr, p, (err, results) => {
  if (err) return console.log(err.message)

  console.log(results)
})
