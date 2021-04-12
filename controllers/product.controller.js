const db = require('../config/database');

exports.get = async (req, res) => {
    try {
        let sql = 'SELECT * FROM products ORDER BY id DESC ';
        const data = await db.query(sql);
        res.render('product_view', {
            results: data.rows
        })

    } catch (error) {
        console.log(error.message);
    }
}

exports.create = async (req, res) => {
    const { name, price } = req.body;
    try {
        let sql = 'INSERT INTO products (name, price)VALUES($1,$2)';
        await db.query(sql, [name, price]);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

exports.delete = async (req, res) => {
    try {
        let id = req.body.product_id;
        let sql = 'DELETE FROM products where id=$1';
        await db.query(sql, [id]);
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}

exports.update = async (req, res) => {
    try {
        const { id, name, price } = req.body;
        let sql = 'UPDATE products SET name=$1, price=$2 where id=$3';
        await db.query(sql, [name, price, id])
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}