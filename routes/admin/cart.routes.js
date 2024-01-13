const express = require('express');
const cartRoute = express.Router();
const {
    getAllCart,
    getCart
} = require('../../controller/admin/cart.controller');

cartRoute.get('/getAllcart', getAllCart);
cartRoute.get('/get-cart', getCart);

module.exports = cartRoute  