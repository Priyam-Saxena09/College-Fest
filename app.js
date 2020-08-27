const express = require("express")
require("./connection")
const port = process.env.PORT
const app = express()
login=""
const user = require("./schema")
const event = require("./schema1")
const register = require("./schema2")
app.use(express.static("static"))
app.use(express.urlencoded())
app.set("view engine","hbs")
app.set("views",(__dirname,"./public"))

app.get("",(req,res) => {
    res.render("login",{})
})

app.get("/about",(req,res) => {
    res.render("about",{})
})

app.get("/contact",(req,res) => {
    res.render("contact",{})
})

app.get("/signup",(req,res) => {
    res.render("signup",{})
})

app.post("/parcipant",async(req,res) => {
    const User = await new user(req.body)
    User.save().then(() => {
        res.render("login",{})
    }).catch(() => {
        res.render("404",{
            "error":"User already exist or You have not filled all the details.",
            "back":"/signup"
        })
    })
})

app.get("/verify",async(req,res) => {
    const Use = await user.find({"name":req.query.name,"usn":req.query.usn})
    if(JSON.stringify(Use) != "[]")
    {
        login=req.query.name
        res.render("main",{
            "name":login,
            "usn":req.query.usn
        })
    }
    else
    {
        res.render("404",{
            "error":"User Not Found or Password is wrong.",
            "back":"/"
        })
    }
})

app.get("/part",async(req,res) => {
    const eve = await event.find({"type":req.query.event})
    res.render("event",{
        "eve":req.query.event
    })
})

app.get("/eve",async(req,res) => {
    const eve = await event.find({"type":req.query.event})
    res.send({"eve":eve})
})

app.get("/reg",async(req,res) => {
    if(login=="")
    {
        res.render("404",{
            "error":"You have to Log in First",
            "back":"/"
        })
        return
    }
    const eve = await event.find({"name":req.query.event})
    const Use = await user.find({"name":login})
    const regis = await register.find({"name":login,"event":req.query.event})
    if(JSON.stringify(regis) !="[]")
    {
        res.render("already",{})
    }
    else
    {
    res.render("form",{
        "name":login,
        "usn":Use[0].usn,
        "dept":Use[0].dept,
        "event":req.query.event,
        "type":eve[0].type,
        "class":"hide"
    })
    }
})

app.post("/register",async(req,res) => {
    const eve = await event.find({"name":req.body.event})
    const regis = await new register(req.body)
    regis.save().then(() => {
        res.render("thanks",{})
    }).catch(() => {
        res.render("form",{
            "error":"Please Fill all the details",
            "name":login,
            "usn":req.body.usn,
            "dept":req.body.dept,
            "event":req.body.event,
            "type":eve[0].type,
            "but":"X",
            "class":"nhide"
        })
    })
})

app.get("/logout",(req,res) => {
    login=""
    res.render("login",{})
})

app.listen(port,() => {
    console.log("Server is running on Port " + port)
})