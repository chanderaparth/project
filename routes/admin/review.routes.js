const express = require('express');
const reviewRoute = express.Router();
const { tokenAdmin } = require('../../halptoken/tokenvaryfayadmin');

const {
    getAllReviews,
    specificReivews
} = require('../../controller/admin/review.controller');

reviewRoute.get('/getAllReview',tokenAdmin, getAllReviews);
reviewRoute.get('/get-Review',tokenAdmin, specificReivews);

module.exports = reviewRoute