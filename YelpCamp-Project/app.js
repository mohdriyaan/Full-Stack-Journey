const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Campground = require("./models/campground")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")

mongoose.connect("mongodb://localhost:27017/yelp-camp")
    .then(()=>{
        console.log("MongoDB Connection Established Successfully")
    })
    .catch((err)=>{
        console.log("Connection Failed : ", err)
    })


app.engine("ejs",ejsMate)
app.set("view engine","ejs")
app.set("views","views")
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))


app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/campgrounds", async(req,res)=>{
    const campgrounds = await Campground.find({})
    res.render("campgrounds/index",{campgrounds})
})

app.get("/campgrounds/new",(req,res)=>{
    res.render("campgrounds/new")
})

app.post("/campgrounds",async(req,res)=>{
    const campground = new Campground(req.body)
    await campground.save()
    res.redirect("/campgrounds")
})

app.get("/campgrounds/:id",async(req,res)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    res.render("campgrounds/show",{campground})
})

app.get("/campgrounds/:id/edit",async(req,res)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    res.render("campgrounds/edit",{campground})
})

app.put("/campgrounds/:id",async(req,res)=>{
    const {id} = req.params
    const campground = await Campground.findByIdAndUpdate(id,req.body,{runValidators:true})
    res.redirect(`/campgrounds/${campground._id}`)
})

app.delete("/campgrounds/:id",async(req,res)=>{
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    res.redirect("/campgrounds")
})

app.listen(3000,()=>{
    console.log("Server started at PORT 3000")
})