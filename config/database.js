const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
});

/*pool.on('connect', () => {
    console.log('pool started')
})

pool.on('remove', () => {
    console.log('pool destroy');
})*/

module.exports = {
    query: (text, params) => pool.query(text, params),
}