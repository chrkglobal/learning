const mysql = require('mysql2/promise');

function createPool() {
  return mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
}

module.exports = createPool;
