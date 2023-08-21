require('dotenv').config();

const mysql = require('mysql2');
const util = require('util');
const testMode: boolean = process.env.JEST_WORKER_ID !== undefined ? true : false;
const DB_HOST: string | undefined = testMode
   ? process.env.MYSQL_HOST_LOCAL
   : process.env.MYSQL_HOST_DOCKER;

var pool = mysql.createPool({
   host: DB_HOST ,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASS ,
   database: process.env.MYSQL_DB,
   connectionLimit: 10,
});
// ping db for common exception errors
pool.getConnection((err: any, connection: any) => {
   if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
         console.error('Database connection was closed.');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
         console.error('Database has too many connections.');
      }
      if (err.code === 'ECONNREFUSED') {
         console.error('Database connection was refused.');
      }
   }

   if (connection) connection.release();
   return;
});

// promisify for node async/await.
pool.query = util.promisify(pool.query);

module.exports = pool;