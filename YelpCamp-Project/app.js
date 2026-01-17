const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Campground = require("./models/campground")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")
const ExpressError = require("./utils/ExpressError")
const {campgroundSchema,reviewSchema} = require("./schemas")
const Review = require("./models/review")

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

const validateCampground = (req,res,next)=>{
    const {error} = campgroundSchema.validate(req.body)
    if(error){
        const msg = error.details.map((el)=>el.message).join(",")
        throw new ExpressError(msg,400)
    }else{
        next()
    }   
}

const validateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body)
    if(error){
        const msg = error.details.map((el)=>el.message).join(",")
        throw new ExpressError(msg,400)
    }else{
        next()
    }
}

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/campgrounds", async(req,res,next)=>{
    const campgrounds = await Campground.find({})
    res.render("campgrounds/index",{campgrounds})    
})

app.get("/campgrounds/new",(req,res)=>{
    res.render("campgrounds/new")
})

app.post("/campgrounds",validateCampground, async(req,res,next)=>{
    // if(!req.body){
    //     throw new ExpressError("Invalid Campground Data",400)
    // }

    // Data Validation , Not Mongoose Schema
    // Server Side Validation (2nd Layer)
    // const campgroundSchema = Joi.object({
    //     title : Joi.string().required(),
    //     price: Joi.number().required().min(0),
    //     image:Joi.string().required(),
    //     location:Joi.string().required(),
    //     description:Joi.string().required()
    // }).required()
    // const {error} = campgroundSchema.validate(req.body)
    // if(error){
    //     const msg = error.details.map((el)=>el.message).join(",")
    //     throw new ExpressError(msg,400)
    // }
    const campground = new Campground(req.body)
    await campground.save()
    res.redirect("/campgrounds")    
})

app.get("/campgrounds/:id",async(req,res,next)=>{
    const {id} = req.params
    const campground = await Campground.findById(id).populate("reviews")
    if(!campground){
        throw new ExpressError("Campground Data Not Found",400)
    }
    res.render("campgrounds/show",{campground})    
    
    
})

app.get("/campgrounds/:id/edit",async(req,res,next)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    if(!campground){
        throw new ExpressError("Campground Data Not Found",400)
    }
    res.render("campgrounds/edit",{campground})
})

app.put("/campgrounds/:id",validateCampground,async(req,res,next)=>{
    if(!req.body){
        throw new ExpressError("Invalid Campground Data",400)
    }
    const {id} = req.params
    const campground = await Campground.findByIdAndUpdate(id,req.body,{runValidators:true})
    res.redirect(`/campgrounds/${campground._id}`)
})

app.delete("/campgrounds/:id",async(req,res,next)=>{
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    res.redirect("/campgrounds")
})

app.post("/campgrounds/:id/reviews",validateReview, async(req,res)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    const review = new Review(req.body)
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    res.redirect(`/campgrounds/${campground._id}`)
})

app.delete("/campgrounds/:id/reviews/:reviewId",async(req,res)=>{
    const {id,reviewId} = req.params
    await Campground.findByIdAndUpdate(id,{$pull : {reviews : reviewId}})
    await Review.findByIdAndDelete(reviewId)
    res.redirect(`/campgrounds/${id}`)
})

app.use((req,res,next)=>{
    next(new ExpressError("404 Not Found!",404))
})

app.use((err,req,res,next)=>{
    const {status = 500} = err
    if(!err.message) err.message = "Something, went wrong!"
    res.status(status).render("campgrounds/error",{err})
})

app.listen(3000,()=>{
    console.log("Server started at PORT 3000")
})