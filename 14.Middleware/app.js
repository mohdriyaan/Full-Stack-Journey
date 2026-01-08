const express = require("express")
const app = express()
const morgan = require("morgan")

// Logs information about the request
app.use(morgan("tiny"))
// For app.get("/"), prints the output :- GET / 200 10 - 0.744 ms

// It is a middleware whch will run regardless of the routing and requests being made.
// app.use will be run for every request being made
// app.use(()=>{
//     console.log("HEY!!")
// })

// app.use((req,res,next)=>{
//     // res.send("Hijacked!!!!")
//     console.log("This is my first middleware")
//     return next()
//     // console.log("This is my first middleware after calling next()") this will not get printed if return statement is used.
// })

// app.use((req,res,next)=>{
//     console.log("This is my second middleware")
//     next()
// })


app.use((req,res,next)=>{
    // req.method = "GET"
    req.requestTime = Date.now()
    console.log(req.method , req.path)
    next()
})

app.use("/dogs",(req,res,next)=>{
    console.log("I love dogs!")
    next()
})

const verifyPassword = (req,res,next)=>{
    const {password} = req.query
    if(password==="chickennugget"){
        next()
    }
    res.send("Sorry you will need the password!!!")
}

app.get("/",(req,res)=>{
    console.log(`Request Time : ${req.requestTime}`)
    res.send("Home Page!")
})

app.get("/dogs",(req,res)=>{
    console.log(`Request Time : ${req.requestTime}`)
    res.send("WOOF WOOF!!")
})

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("The secret is a secret! It can't be said.!!")
})

app.use((req,res)=>{
    res.status(404).send("NOT FOUND!")
})

app.listen(3000)