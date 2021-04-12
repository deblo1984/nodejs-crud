const path = require('path');
const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();

//products controller
const product = require('./controllers/product.controller')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', product.get);
app.post('/save', product.create);
app.post('/delete', product.delete);

app.post('/update', product.update);

app.listen(5000, () => {
    console.log('server is running at port 5000')
})

