const express = require("express")
const app = express()
const morgan = require("morgan")
const AppError = require("./AppError")

app.use(morgan("tiny"))

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
    // Simple Way
    // const err = new Error("password required")
    // err.status = 401
    // next(err)

    // Recommended Way
    throw new AppError("password required",401)
    
    // res.status(401)
    // res.send("Sorry you will need the password!!!")
    // throw new Error("Password will be required.")
}

app.get("/",(req,res)=>{
    console.log(`Request Time : ${req.requestTime}`)
    res.send("Home Page!")
})

app.get("/error",(req,res,next)=>{
    chicken.fly() // error
    next()
})

app.get("/dogs",(req,res)=>{
    console.log(`Request Time : ${req.requestTime}`)
    res.send("WOOF WOOF!!")
})

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("The secret is a secret! It can't be said.!!")
})

app.use((err,req,res,next)=>{
    if(err.status){
        res.status(err.status).send(err.message)
    }else{
        res.status(500).send(err.message)
    }
})

app.use((req,res)=>{
    res.status(404).send("NOT FOUND!")
})

// app.use((err,req,res,next)=>{
//     console.log("****************************")
//     console.log("************ERROR***********")
//     console.log("****************************")
//     console.log(err)
//     res.status(500).send("We got an error!!")
// })

// app.use((err,req,res,next)=>{
//     const {status= 500} = err
//     const {message = "Somethig went wrong"} = err
//     res.status(status).send(message)
// })
app.listen(3000)