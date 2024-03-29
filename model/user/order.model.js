const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
},
items: [{
    cartItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
    },
    quntity: {
        type: Number,
        default: 1
    },
    productImage: {
        type: String
    },
    productName: {
        type: String,
        require: true
    },
    productPrice: {
        type: Number,
        required: true
    },
}],
totalPrice: {
    type: Number,
},
isDelete: {
    type: Boolean,
    default: false
}
});

module.exports = mongoose.model('orders',orderSchema);
