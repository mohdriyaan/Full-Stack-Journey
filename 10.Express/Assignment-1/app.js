const express = require("express")

const app = express()


// app.use((req,res,next)=>{
//     console.log("First Middleware")
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("Second Middleware")
// })

app.use("/users",(req,res)=>{
    console.log("List of Users")
    res.send("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>")
})

app.use("/",(req,res)=>{
    console.log("Welcome to the Home Page")
    res.send("<h1>Welcome to the Home Page</h1>")
})

app.listen(3000)