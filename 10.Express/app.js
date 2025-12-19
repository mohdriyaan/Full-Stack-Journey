const express = require("express")
const app = express()
const path = require("path")


const bodyParser = require("body-parser")
// Add a MiddleWare Function that accepts array of req handlers
// app.use((req,res,next)=>{
//     console.log("In the middleware")
//     next() // Allows the request to continue to the next middleware in line
// })

const adminRoutes = require("./routes/admin.js")
const shopRoutes = require("./routes/shop.js")

app.use(bodyParser.urlencoded({ extended: false }))

// app.use("/",(req,res,next)=>{
//     // console.log("This always runs!")
//     next()
// })

app.use("/admin",adminRoutes)
app.use(shopRoutes)

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"views","not-found.html"))
})

app.listen(3000)






