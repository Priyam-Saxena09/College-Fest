const mongoose = require("mongoose")
const schema2 = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    dept:
    {
        type:String,
        required:true
    },
    usn:
    {
        type:String,
        required:true,
    },  
    sem:
    {
        type:Number,
        required:true
    },
    age:
    {
        type:Number,
        required:true
    },
    event:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        required:true
    }
})

const register = mongoose.model("register",schema2)
module.exports = register