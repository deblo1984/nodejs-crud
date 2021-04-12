const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
});

const sql = `CREATE TABLE products (
    id SERIAL PRIMARY KEY, name VARCHAR NOT NULL, price DOUBLE PRECISION NOT NULL)`;
try {
    pool.query(sql);
} catch (error) {
    console.log(error.message)
}
