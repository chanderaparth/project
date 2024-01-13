const express = require('express');
const { verifyToken } = require('../../halptoken/tokenvaryfay');
const cartRoute = express.Router();
const {
    addnewCart,
    getallCarts,
    specificCart,
    updateCart,
    deleteCart,
} = require('../../controller/user/cart.controller');

cartRoute.post('/add-Cart',verifyToken,addnewCart);
cartRoute.get('/get-CartAll',verifyToken,getallCarts);
cartRoute.get('/get-Cart',verifyToken,specificCart);
cartRoute.put('/update-Cart',verifyToken,updateCart);
cartRoute.delete('/delete-Cart',verifyToken,deleteCart);


module.exports = cartRoute