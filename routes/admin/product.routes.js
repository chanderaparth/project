const express = require('express');
const productRoute = express.Router();
const {
    createProduct,
    getAllProduct,
    specificProduct,
    updateProduct,
    deleteProduct
} = require('../../controller/admin/product.controller');
const { upload } = require('../../halptoken/imageuploader');
const { tokenAdmin } = require('../../halptoken/tokenvaryfayadmin');

productRoute.post('/add-product', tokenAdmin ,upload.single('productImage'),createProduct);
productRoute.get('/getall-product', tokenAdmin , getAllProduct);
productRoute.get('/get-product', tokenAdmin , specificProduct);
productRoute.put('/update-product', tokenAdmin , upload.single('productImage') , updateProduct);
productRoute.delete('/delete-product', tokenAdmin , deleteProduct);

module.exports = productRoute