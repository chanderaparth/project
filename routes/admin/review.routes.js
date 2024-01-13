const express = require('express');
const reviewRoute = express.Router();
const {
    getAllReviews,
    specificReivews
} = require('../../controller/admin/review.controller');

reviewRoute.get('/getAllReview', getAllReviews);
reviewRoute.get('/get-Review', specificReivews);

module.exports = reviewRoute