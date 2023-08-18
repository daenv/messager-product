const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
   host: 'localhost',
   user: process.env.DB_USER || 'root',
   password: process.env.DB_PASSWORD || '',
   database: 'message-db',
});
db.connect((err: any) => {
    if (err) throw err;
    console.log('Connected to mySQL database!');
  });

module.exports = db;
