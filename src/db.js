const {Pool} = require('pg');

const pool = new Pool({
    user: 'master',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: "carnaval2023"
})

module.exports = pool;