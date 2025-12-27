const express = require("express")
const app = express()

app.set("view-engine","ejs")
app.use(express.urlencoded({extended:false}))


app.use((req,res)=>{
    res.status(404).render("not-found",{pageTitle:"Page Not Found"})
})
app.listen(3000)
