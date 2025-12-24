const express = require("express")
const router = express.Router()
const path = require("path")
const rootDir = require("../util/path.js")

router.get("/users",(req,res)=>{
    res.sendFile(path.join(rootDir,"views","users.html"))
})

module.exports = router