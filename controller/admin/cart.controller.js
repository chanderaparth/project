const { mongoose } = require('mongoose');
const cartModel = require('../../model/user/cart.model');
const productModel = require('../../model/admin/product.model');

exports.getAllCart = async (req,res) => {
    try {
        let allCart = await cartModel.find({user: req.user._id, isDelete: false});
        res.json(allCart);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};
    
    exports.getCart = async(req, res)=>{
        try {
            let id = new mongoose.Types.ObjectId(req.query.cartid);
            let cartItem = await cartModel.findById(id);
            if(!cartItem)
            {
                return res.json({message: 'cart not found'});
            }
            res.status(200).json(cartItem);
        } catch(err){
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        }
    };