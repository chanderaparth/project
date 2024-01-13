const express = require('express');
const productRoute = require('../../routes/admin/product.routes');
const cartRoute = require('../../routes/admin/cart.routes');
const orderRoute = require('../../routes/admin/order.routes');
const reviewRoute = require('../../routes/admin/review.routes');
const adminRoute = require('../../routes/admin/admin.routes');
const indexRoute = express.Router();

indexRoute.use('/admin',adminRoute)
indexRoute.use('/product',productRoute);
indexRoute.use('/cart',cartRoute);
indexRoute.use('/order',orderRoute);
indexRoute.use('/review',reviewRoute);

module.exports = indexRoute