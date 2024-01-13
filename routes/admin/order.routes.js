const express = require('express');
const orderRoute = express.Router();
const {
    getAllOrder,
    getSpecificOrder
} = require('../../controller/admin/order.controller');

orderRoute.get('/getAllorder', getAllOrder);
orderRoute.get('/get-order', getSpecificOrder);

module.exports = orderRoute