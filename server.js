const path = require('path');
const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

//products controller
const product = require('./routes/product.route');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static(__dirname + '/public'));

app.use(product);

app.listen(5000, () => {
    console.log('server is running at port 5000');
})

