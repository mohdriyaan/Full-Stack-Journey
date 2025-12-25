const express = require("express")
const app = express()
// const expressHbs = require("express-handlebars")

// app.engine("handlebars",expressHbs())
// app.set("view engine","handlebars")
// app.set("views","views")

app.set("view engine","ejs")
app.set("views","views")

const path = require("path")


// Add a MiddleWare Function that accepts array of req handlers
// app.use((req,res,next)=>{
//     console.log("In the middleware")
//     next() // Allows the request to continue to the next middleware in line
// })

const adminData = require("./routes/admin.js")
const shopRoutes = require("./routes/shop.js")

app.use(express.urlencoded({ extended: false }))
// Handles static files and does pass through middlewares.
app.use(express.static(path.join(__dirname,"public")))
// app.use("/",(req,res,next)=>{
//     // console.log("This always runs!")
//     next()
// })

app.use("/admin",adminData.routes)
app.use(shopRoutes)

app.use((req,res)=>{
    res.status(404).render("404",{pageTitle:"Page Not Found"})
})

app.listen(3000)






