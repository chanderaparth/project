const express = require('express');
const userRoute = express.Router();
const{
    signUp,
    login,
    getProfile,
    changePassword,
    updateProfile,
    deleteProfile
} = require('../../controller/user/user.controller');
const { verifyToken } = require('../../halptoken/tokenvaryfay');
const { upload } = require('../../halptoken/imageuploader');

userRoute.post('/signUp', upload.single('profileImage'), signUp);
userRoute.post('/login', login);
userRoute.get('/profile', verifyToken, getProfile);
userRoute.put('/changePassword', verifyToken, changePassword);
userRoute.put('/updateProfile', verifyToken,upload.single('profileImage'), updateProfile);
userRoute.delete('/deleteProfile', verifyToken, deleteProfile);

module.exports = userRoute