const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("All Shelters")
})

router.post("/",(req,res)=>{
    res.send("Creating One Shelter")
})

router.get("/:id",(req,res)=>{
    res.send("Viewing One Shelter")
})

router.get("/:id/edit",(req,res)=>{
    res.send("Editing one shelter")
})

module.exports = router
