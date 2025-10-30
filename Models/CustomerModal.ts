import mongoose from "mongoose";


const CustomerModal = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
});

const Customer = mongoose.models.Customers || mongoose.model("Customers",CustomerModal);
export default Customer;