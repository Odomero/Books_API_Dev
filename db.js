const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database:'books',
    password: 'c@$hewn0T',
    port: 5432,
});

module.exports = pool;
