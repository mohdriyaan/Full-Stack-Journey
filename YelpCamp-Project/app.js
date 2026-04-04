if(process.env.NODE_ENV!=="production"){
    require("dotenv").config()
}

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")
const ExpressError = require("./utils/ExpressError")
const session = require("express-session")
const {MongoStore} = require("connect-mongo")
const flash = require("connect-flash")
const passport = require("passport")
const localStrategy = require("passport-local")
const User = require("./models/user")
const mongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")
const moment = require("moment")

const campgroundRoutes = require("./routes/campgrounds")
const reviewRoutes = require("./routes/reviews")
const userRoutes = require("./routes/users")

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';

mongoose.connect(dbUrl)
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
app.use(mongoSanitize())

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {secret}
});

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    name:"session",
    secret,
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        expires:Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge : 1000 * 60 * 60 * 24 * 7
    }
}

app.set('trust proxy', 1);
app.use(session(sessionConfig))
app.use(flash())


const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/",
    "https://res.cloudinary.com/dagj0onkw/",
    "https://unpkg.com/"
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/", 
    "https://res.cloudinary.com/dagj0onkw/",
    "https://unpkg.com/"
];
const connectSrcUrls = [
    "https://api.maptiler.com/",
    "https://res.cloudinary.com/dagj0onkw/"
];
const fontSrcUrls = [ "https://res.cloudinary.com/dagj0onkw/", "https://fonts.gstatic.com/" ];
 
app.use(
    helmet.contentSecurityPolicy({
        directives : {
            defaultSrc : [],
            connectSrc : [ "'self'", ...connectSrcUrls ],
            scriptSrc  : [ "'unsafe-inline'", "'self'", ...scriptSrcUrls ],
            styleSrc   : [ "'self'", "'unsafe-inline'", ...styleSrcUrls ],
            workerSrc  : [ "'self'", "blob:" ],
            objectSrc  : [],
            imgSrc     : [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/dagj0onkw/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
                "https://images.unsplash.com/",
                "https://api.maptiler.com/",
                "https://ui-avatars.com/"
            ],
            fontSrc    : [ "'self'", ...fontSrcUrls ],
            mediaSrc   : [ "https://res.cloudinary.com/dagj0onkw/" ],
            childSrc   : [ "blob:" ]
        }
    })
);

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.use((req,res,next)=>{
    res.locals.currentUser = req.user
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error")
    res.locals.moment = moment;
    next();
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

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server started at PORT ${port}`)
})