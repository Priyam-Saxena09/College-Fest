const mongoose = require("mongoose")
const e = require("express")
const schema1 = new mongoose.Schema({
    type:
    {
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true,
    }
})

const event = mongoose.model("event",schema1)
module.exports = event