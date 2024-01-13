const express = require('express');
const productRoute = require('../../routes/user/product.routes');
const cartRoute = require('../../routes/user/cart.routes');
const orderRoute = require('../../routes/user/order.routes');
const favouriteRoute = require('../../routes/user/favourite.routes');
const reviewRoute = require('../../routes/user/review.routes');
const indexRoute = express.Router();

indexRoute.use('/product', productRoute);
indexRoute.use('/cart', cartRoute);
indexRoute.use('/order',orderRoute);
indexRoute.use('/favourite',favouriteRoute);
indexRoute.use('/review', reviewRoute);


module.exports = indexRoute