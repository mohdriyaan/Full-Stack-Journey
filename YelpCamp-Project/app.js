const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Campground = require("./models/campground")

mongoose.connect("mongodb://localhost:27017/yelp-camp")
    .then(()=>{
        console.log("MongoDB Connection Established Successfully")
    })
    .catch((err)=>{
        console.log("Connection Failed : ", err)
    })

app.set("view engine","ejs")
app.set("views","views")


app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/makecampground", async(req,res)=>{
    const camp = new Campground({title:"BackYard"})
    await camp.save()
    res.send(camp)
})

app.listen(3000,()=>{
    console.log("Server started at PORT 3000")
})