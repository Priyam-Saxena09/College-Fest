const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    usn:
    {
        type:String,
        required:true,
        unique:true
    },
    dob:
    {
        type:Date,
        required:true
    },
    dept:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    year:
    {
        type:Number,
        required:true
    },
    phone:
    {
        type:Number,
        required:true
    }
})

const user = mongoose.model("user",schema)
module.exports = user