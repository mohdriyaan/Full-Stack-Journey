const express =  require("express")
const app = express()
const mongoose = require("mongoose")
const Product = require("./models/product")
const methodOverride = require("method-override")
const AppError = require("./AppError")

app.set("view engine","ejs")
app.set("views","views")
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

const categories = ["fruit","vegetable","dairy"]

mongoose.connect("mongodb://localhost:27017/farmStand2")
    .then(()=>{
        console.log("Mongo Connection Established")
    })
    .catch((err)=>{
        console.log("Mongo Connection Error :", err.errors)
    })

app.get("/products",async (req,res)=>{
    try {
        const {category} = req.query
        if(category){
            const products = await Product.find({category})
            res.render("products/index",{products,category})
        }else{
            const products = await Product.find({})
            res.render("products/index",{products,category:"All"})
        }    
    } catch (error) {
        next(error)    
    }
    
})

app.get("/products/new",(req,res)=>{
    // throw new AppError("NOT ALLOWED",404)
    res.render("products/new",{categories})
})

app.post("/products", async (req,res,next)=>{
    try{
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.redirect(`/products/${newProduct.id}`)
    }catch(err){
        // Express 5
        throw new AppError("All fields are required",400)
        // Express 4
        // next(err)
    }
    
})

app.get("/products/:id",async(req,res,next)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product){
            // Express 5
            throw new AppError("Product does not exist",404)
            // Express 4
            // return next(new AppError("Product Not Found",404))
        }
        res.render("products/show",{product})    
    } catch (error) {
        next(error)
    }
    
})

app.get("/products/:id/edit",async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product){
            throw new Error("Product Not Found",404)
        }
        res.render("products/edit",{product,categories})    
    } catch (error) {
        next(error)
    }
    
})

app.put("/products/:id", async(req,res,next)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true})
        res.redirect(`/products/${product._id}`)
    }catch(err){
        next(err)
    }
    
})

app.delete("/products/:id", async(req,res)=>{
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect("/products")
})

// Error Logger
app.use((err,req,res,next)=>{
    console.log(err.name)
    if(err.name=="CastError"){
        err.message = "Input Error"
        err.status = 400
    }
    next(err)
})

app.use((err,req,res,next)=>{
    const {status=500,message="Someting went wrong!!!"} = err
    res.status(status).send(message)
})


app.listen(3000,()=>{
    console.log("Server Listening at PORT 3000")
})


