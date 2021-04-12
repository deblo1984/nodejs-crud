const express = require('express');
const product = require('../controllers/product.controller');

const router = express.Router();

router.route('/').get(product.get);
router.route('/save').post(product.create);
router.route('/update').post(product.update);
router.route('/delete').post(product.delete);

module.exports = router
