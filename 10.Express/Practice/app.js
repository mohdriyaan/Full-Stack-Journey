const express = require("express")

const app = express()

// Anytime we use this request, this will match with all the other requests
// app.use((req,res)=>{
//     console.log("Hi I am from the server")
//     res.send("Hi I am from the server.")
// })

// app.get(/(.*)/,(req,res)=>{
//     res.send("I don't know that path...")
// })

app.get("/r/:subreddit/",(req,res)=>{
    const {subreddit} = req.params
    res.send(`Welcome to ${subreddit} subreddit</h1>`)
})

app.get("/r/:subreddit/:id",(req,res)=>{
    console.log(req.params)
    const {subreddit,id} = req.params
    res.send(`<h1>Viewing Post ID : ${id}. Welcome to ${subreddit} subreddit</h1>`)
})

app.get("/",(req,res)=>{
    res.send("Welcome to home page!")
})

app.get("/cats",(req,res)=>{
    console.log("CAT REQUEST")
    res.send("MEOW")
})

app.post("/cats",(req,res)=>{
    res.send("POST request to /cats!!!!!")
})


app.get("/dogs",(req,res)=>{
    console.log("DOG Request")
    res.send("WOOF")
})

app.get("/search",(req,res)=>{
    console.log(req.query)
    const {q} = req.query
    if(!q){
        res.send("Nothing found if nothing searched")
    }
    res.send(`Hi. Search results for ${q}`)
})

app.get(/(.*)/,(req,res)=>{
    res.send("I don't know that path...")
})
// cats - "meow"
// /dogs - "woof"
// "/" - Home page

app.listen(3000,()=>{
    console.log("Listening on PORT 3000")
})

