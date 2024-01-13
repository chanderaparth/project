const express = require('express');
const {verifyToken} = require('../../halptoken/tokenvaryfay');
const orderRoute = express.Router();
const {
    addOrder,
    getOrder,
    deleteOrder
} = require('../../controller/user/order.controller');

orderRoute.post('/add-Order',verifyToken,addOrder);
orderRoute.get('/get-Order',verifyToken,getOrder);
orderRoute.delete('/delete-Order',verifyToken,deleteOrder);


module.exports = orderRoute