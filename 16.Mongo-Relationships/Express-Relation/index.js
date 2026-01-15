const express =  require("express")
const app = express()
const mongoose = require("mongoose")
const Product = require("./models/product")
const methodOverride = require("method-override")
const Farm = require("./models/farm")

app.set("view engine","ejs")
app.set("views","views")
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

const categories = ["fruit","vegetable","dairy"]


// FARM ROUTES

app.get("/farms",async(req,res)=>{
    const farms = await Farm.find({})
    res.render("farms/index",{farms})
})

app.get("/farms/new",(req,res)=>{
    res.render("farms/new")
})

app.post("/farms",async (req,res)=>{
    const farm = new Farm(req.body)
    await farm.save()
    res.redirect("/farms")
})

app.get("/farms/:id",async(req,res)=>{
    const {id} = req.params
    const farm = await Farm.findById(id).populate("products")
    res.render("farms/show",{farm})   
})

app.get("/farms/:id/products/new",async(req,res)=>{
    const {id} = req.params
    const farm = await Farm.findById(id)
    res.render("products/new",{categories,farm})
})

app.post("/farms/:id/products",async(req,res)=>{
    const {id} = req.params
    const farm = await Farm.findById(id)
    const {name,price,category} = req.body
    const product = new Product({name,price,category})
    farm.products.push(product)
    product.farm = farm
    await farm.save()
    await product.save()
    res.redirect(`/farms/${id}`)
})

app.delete("/farms/:id", async(req,res)=>{
    const {id} = req.params
    await Farm.findByIdAndDelete(id)
    res.redirect("/farms")

})
// PRODUCT ROUTES

mongoose.connect("mongodb://localhost:27017/farmStand2")
    .then(()=>{
        console.log("Mongo Connection Established")
    })
    .catch((err)=>{
        console.log("Mongo Connection Error :", err.errors)
    })

app.get("/products",async (req,res)=>{
    const {category} = req.query
    if(category){
        const products = await Product.find({category})
        res.render("products/index",{products,category})
    }else{
        const products = await Product.find({})
        res.render("products/index",{products,category:"All"})
    }
})

app.get("/products/new",(req,res)=>{
    res.render("products/new",{categories})
})

app.post("/products", async (req,res)=>{
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`/products/${newProduct.id}`)
})

app.get("/products/:id",async(req,res)=>{
    const {id} = req.params
    const product = await Product.findById(id).populate("farm")
    res.render("products/show",{product})
})

app.get("/products/:id/edit",async (req,res)=>{
    const {id} = req.params
    const product = await Product.findById(id)
    res.render("products/edit",{product,categories})
})

app.put("/products/:id", async(req,res)=>{
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true})
    res.redirect(`/products/${product._id}`)
})

app.delete("/products/:id", async(req,res)=>{
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect("/products")
})


app.listen(3000,()=>{
    console.log("Server Listening at PORT 3000")
})


