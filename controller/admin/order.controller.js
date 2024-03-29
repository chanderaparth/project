// const cart = require('../../model/user/cart.model');
const orderModel = require('../../model/user/order.model');
const {mongoose} = require('mongoose');


exports.getAllOrder = async (req,res) => {
    try {
        let Order = await orderModel.find({isDelete: false});
        res.json(Order);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};

exports.getSpecificOrder = async (req,res) => {
  try {
      const {orderId} = req.body;
      let order = await orderModel.findOne({_id: orderId , isDelete: false});
      if(!order){
          return res.json({message:"your order not found"});
      }
      res.json(order);
  } catch (err) {
      console.log(err);
      res.status(500).json({message: "Inrernal Server Error"});
  }
};