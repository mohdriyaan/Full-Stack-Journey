const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")
const ExpressError = require("./utils/ExpressError")
const session = require("express-session")
const flash = require("connect-flash")

const campgrounds = require("./routes/campgrounds")
const reviews = require("./routes/reviews")

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
app.use(express.static("public"))

const sessionConfig = {
    secret : "thisshouldbeabettersecret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge : 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash())

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error")
    next();
})

app.use("/campgrounds",campgrounds)
app.use("/campgrounds/:id/reviews",reviews)

app.get("/",(req,res)=>{
    res.render("home")
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