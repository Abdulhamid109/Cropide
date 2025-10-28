import mongoose from "mongoose";


const userModal = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const User = mongoose.models.users || mongoose.model("users",userModal);
export default User;