const mongoose=require('mongoose');
const { Product } = require('./Product');
const OrderSchema= new mongoose.Schema({
    userId: String,
    cartItems:[
       {
        ProductId:String,
        title:String,
        image:String,
        price:String,
        salePrice:String,
quantity:Number
       } 
    ],
    addressInfo:{
        addressid: String,
        address:String,
        city:String,
        pinCode:String,
        notes:String
    },
    orderStatus:String,
    paymentMethod:String,
    paymentStatus:Number,
    orderDate:Date,
    orderUpdateDtae: Date,
    paymentId: String,
    payerId: String
});
module.exports=mongoose.model("Order", OrderSchema)