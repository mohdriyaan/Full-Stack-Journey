const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(cookieParser("thisismysecret"))

app.get("/greet",(req,res)=>{
    // console.log(req.cookies)
    const {name = "no-name"} = req.cookies
    res.send(`Hey there!, ${name}`)
})

app.get("/setname",(req,res)=>{
    res.cookie("name","stevie")
    res.cookie("animal","lion")
    res.send("Ok Sent You A Cookie!")
})

app.get("/signedcookie",(req,res)=>{
    res.cookie("fruit","grape",{signed:true})
    res.send("Ok signed your fruit cookie!!")
})

app.get("/verifyfruit",(req,res)=>{
    console.log(req.cookies) // unsigned cookie
    console.log(req.signedCookies) // signed cookie
    res.send("Consolled the data in terminal")
})

app.listen(3000,()=>{
    console.log("Serving at PORT 3000")
})