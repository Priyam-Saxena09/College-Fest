const mongoose = require("mongoose")
mongoose.connect(process.env.connection,{
    useNewUrlParser:true,
    useCreateIndex:true
})