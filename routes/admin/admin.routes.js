const express = require('express');
const { getProfile, changePassword, updateProfile, deleteProfile } = require('../../controller/admin/admin.controller');
const { tokenAdmin } = require('../../halptoken/tokenvaryfayadmin');
const adminRoute = express.Router();

adminRoute.get('/profile', tokenAdmin, getProfile);
adminRoute.put('/changePassword', tokenAdmin, changePassword);
adminRoute.put('/update-profile', tokenAdmin, updateProfile);
adminRoute.delete('/delete-profile', tokenAdmin, deleteProfile);

module.exports = adminRoute