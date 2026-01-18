const express = require("express")
const app = express()
const User = require("./models/user")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const session = require("express-session")

mongoose.connect("mongodb://localhost:27017/authDemo")

app.set("view engine","ejs")
app.set("views","views")

const sessionConfig = {
    secret:"notagoodsecret",
    resave:false,
    saveUninitialized:true
}
app.use(session(sessionConfig))

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("This is a home page")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register",async(req,res)=>{
    const {username,password} = req.body
    const hash = await bcrypt.hash(password,12)
    const user = new User({
        username,
        password : hash
    })
    await user.save()
    res.redirect("/")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async (req,res)=>{
    const {username,password} = req.body
    const user = await User.findOne({username})
    const validPassword = await bcrypt.compare(password,user.password)
    if(validPassword){
        res.send("Login Successfully!!")
    }else{
        res.send("Try Again!")
    }
})

app.get("/secret",(req,res)=>{
    res.send("This is a secret! You cannot see me unless logged in.")
})

app.listen(3000,()=>{
    console.log("Server Started at Port 3000.")
})
