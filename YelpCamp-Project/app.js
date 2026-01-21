const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")
const ExpressError = require("./utils/ExpressError")
const session = require("express-session")
const flash = require("connect-flash")
const passport = require("passport")
const localStrategy = require("passport-local")
const User = require("./models/user")

const campgroundRoutes = require("./routes/campgrounds")
const reviewRoutes = require("./routes/reviews")
const userRoutes = require("./routes/users")

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

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next)=>{
    res.locals.currentUser = req.user
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error")
    next();
})

app.get("/fakeUser",async(req,res)=>{
    const user = new User({email:"abcd@gmail.com",username:"abcd"})
    const newUser = await User.register(user,"chicken")
    res.send(newUser)
})

app.use("/",userRoutes)
app.use("/campgrounds",campgroundRoutes)
app.use("/campgrounds/:id/reviews",reviewRoutes)

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