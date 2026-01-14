// Dummy user (replace with DB later)
const mysql = require('mysql2/promise');
async function connectToDatabase() {
  try {
    const db = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'P@$$word1',
      database: 'rk'
    });

    console.log('MySQL connected successfully');
    return db;
  } catch (error) {
    console.error('MySQL connection failed:', error.message);
    throw error;
  }
}


module.exports = connectToDatabase;

