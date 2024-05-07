const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema =  new Schema({
    
    delivery_id: {type:Number,required: false},
    delivery_quantity: {type:Number,required: false },
    driver_nic: {type:String,required: false },
    delivery_status: {type:String,required: false },
    request_status: {type:String,required: false },
    lorry_number: {type:String,required: false },
    delivery_date: {type:Date,required: false },
    tea_type: {type:String,required: false },
    factory_name_address:{type:String,required: false },
    factory_password:{type:String,required: false },

})

const  delivery = mongoose.model("delivery",deliverySchema);

module.exports=delivery;