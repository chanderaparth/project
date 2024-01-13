const express = require('express');
const favouriteRoute = express.Router();
const {verifyToken} = require('../../halptoken/tokenvaryfay');
const {
    addToFavourite,
    getAllFavourite,
    specificFavourite,
    deleteFavourite
} = require('../../controller/user/favourite.controller')

favouriteRoute.post('/add-fav', verifyToken, addToFavourite);
favouriteRoute.get('/allfavourite', verifyToken, getAllFavourite);
favouriteRoute.get('/getfavourite', verifyToken, specificFavourite);
favouriteRoute.delete('/delete-favourite', verifyToken, deleteFavourite);

module.exports = favouriteRoute;