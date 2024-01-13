const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : Number,
        required : true
    },
    confirmpassword:{
        type : Number,
        required : true
    },
    profileimage:{
        type : String
    },
    isAdmin:{
        type : Boolean,
        default : false
    },
     isDelete:{
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('users',userSchema);
