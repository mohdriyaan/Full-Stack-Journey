const express = require("express")
const router = express.Router()
const usersData = require("./input.js") 
router.get("/users",(req,res)=>{
    const names = usersData.users
    res.render("users",{pageTitle:"Users",userName:names})
})

module.exports = router