const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mybase'
})

connection.connect()

const p = {
  id: 3,
  username: 'Tom',
  age: '10',
  gender: 'male'
}
const sqlStr = 'update users set ? where id=?'
connection.query(sqlStr, [p, p.id], (err, results) => {
  if (err) return console.log(err.message)

  console.log(results)
})
