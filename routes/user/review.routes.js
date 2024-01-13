const express = require('express');
const { verifyToken } = require('../../halptoken/tokenvaryfay');
const { upload } = require('../../halptoken/imageuploader');
const { addReivew, getAllReview, specificReivew, updateReview, deleteReview } = require('../../controller/user/review.controller');
const reviewRoute = express.Router();

reviewRoute.post('/add-review', verifyToken, upload.single('productImage') ,addReivew);
reviewRoute.get('/getall-review', verifyToken, getAllReview);
reviewRoute.get('/get-review', verifyToken, specificReivew);
reviewRoute.put('/update-review', verifyToken, updateReview);
reviewRoute.delete('/delete-review', verifyToken, deleteReview);

module.exports = reviewRoute