const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user_name:{type:String,required:true},
    user_email:{type:String,required:true},
    user_password:{type:String,required:true},
    terms:{type:Boolean,required:true},
    order:{type:Array,required:true},
    cart:{type:Object,required:true},
})

let  User = mongoose.model("user",userSchema)

module.exports = User