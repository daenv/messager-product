import { createPool } from 'mysql2/promise';

const util = require('util');
const testMode: boolean = process.env.JEST_WORKER_ID !== undefined ? true : false;
const DB_HOST: string | undefined = testMode ? process.env.MYSQL_HOST_LOCAL : process.env.MYSQL_HOST_DOCKER;

export const pool = createPool({
   host: DB_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASS,
   database: process.env.MYSQL_DB,
   connectionLimit: 10 || process.env.MYSQL_CONNECTION_LIMIT,
});

if(pool) console.log('DB Connected');
// ping db for common exception errors 
pool.query = util.promisify(pool.query)

