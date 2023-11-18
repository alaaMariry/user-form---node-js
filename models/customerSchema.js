const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the Schema 
const customerSchema = new Schema({
    firstName : String ,
    lastName : String,
    email : String,
    phone : String,
    age : Number,
    country : String,
    gender : String,
},{ timestamps:true });

//Create a model based on that Schema
const User = mongoose.model("Customer" , customerSchema);

//export the model
module.exports=User;