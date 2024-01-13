const express = require('express');
const { showAllProduct, specificProduct } = require('../../controller/user/product.controller');
const { verifyToken } = require('../../halptoken/tokenvaryfay');
const productRoute = express.Router();

productRoute.get('/showall-product', verifyToken, showAllProduct);
productRoute.get('/show-product', verifyToken, specificProduct);

module.exports = productRoute