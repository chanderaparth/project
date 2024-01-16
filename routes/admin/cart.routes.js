const express = require('express');
const cartRoute = express.Router();
const { tokenAdmin } = require('../../halptoken/tokenvaryfayadmin');
const {
    getAllCart,
    getCart
} = require('../../controller/admin/cart.controller');

cartRoute.get('/getAllcart',tokenAdmin, getAllCart);
cartRoute.get('/get-cart',tokenAdmin, getCart);

module.exports = cartRoute  