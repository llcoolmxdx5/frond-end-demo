const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',   // 数据库地址
  user: 'root',    // 数据库用户
  password: 'jsvue7529',  // 数据库密码
  database: 'gp16'  // 选中数据库
})

module.exports = (sql, params) => {
  return new Promise((resolve, reject) => {
    // 在数据池中进行会话操作
    pool.getConnection(function (err, connection) {
      console.log(err)
      connection.query(sql, params, (error, results, fields) => {
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
        connection.release();// 结束会话
      })
    })
  })
}
