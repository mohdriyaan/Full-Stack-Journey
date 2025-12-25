const express = require("express")
const router = express.Router()

const users = []

router.get("/",(req,res)=>{
    res.render("input",{pageTitle:"Home"})
})

router.post("/users",(req,res)=>{
    users.push({name:req.body.user})
    res.redirect("/users")
})

module.exports = {
    router,
    users
}



