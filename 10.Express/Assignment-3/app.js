const express = require("express")

const app = express()

const inputRoute = require("./routes/input.js")
const usersRoute = require("./routes/users.js")

app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))


app.use(usersRoute)
app.use(inputRoute.router)

app.use((req,res)=>{
    res.status(404).render("404",{pageTitle:"Page Not Found"})
})

app.listen(3000)

