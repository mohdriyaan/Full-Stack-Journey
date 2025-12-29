const express = require("express");
const app = express();
const { v4 : uuid} = require("uuid");
const methodOverride = require("method-override")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride("_method"))

app.set("view engine","ejs")
app.set("views","views")

let comments = [
    {   
        id : uuid(),
        username : "Todd",
        comment: "lol, this is so funny"
    },
    {   
        id : uuid(),
        username : "Skyler",
        comment: "I am going on vacation"
    },
    {   
        id : uuid(),
        username : "Skibidi",
        comment: "Plz delete the account, Todd"
    },
    {   
        id : uuid(),
        username : "woofwoof",
        comment: "meowi"
    },
]

app.get("/comments",(req,res)=>{
    res.render("comments/index",{comments})
})

app.get("/comments/new",(req,res)=>{
    res.render("comments/new",{comments})
})

app.post("/comments",(req,res)=>{
    // console.log(req.body)
    const {username,comment} = req.body
    comments.push({id: uuid(),username,comment})
    res.redirect("/comments")
})

app.get("/comments/:id",(req,res)=>{
    const {id} = req.params
    const comment = comments.find((comment)=> comment.id === id)
    res.render("comments/show", {comment})
})

app.get("/comments/:id/edit",(req,res)=>{
    const {id} = req.params
    const comment = comments.find((comment)=>comment.id === id)
    res.render("comments/edit",{comment})
})

app.patch("/comments/:id",(req,res)=>{
    const {newComment} = req.body
    const {id} = req.params
    const comment = comments.find((comment)=>comment.id === id)
    comment.comment = newComment
    res.redirect("/comments")
})

app.delete("/comments/:id",(req,res)=>{
    const {id} = req.params
    comments = comments.filter((comment)=>comment.id !== id)
    res.redirect("/comments")
})



app.listen(3000)