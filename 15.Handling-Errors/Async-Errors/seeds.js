const Product = require("./models/product")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/farmStand2")
    .then(()=>{
        console.log("Mongo Connection Established")
    })
    .catch((err)=>{
        console.log(err.errors)
    })

// inserts only one product

// const p = new Product({
//     name : "Ruby GrapeFruit",
//     price : "1.99",
//     category: "fruit"
// })    

// p.save()
//     .then(()=>{
//         console.log(p)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// insert many products
const seedProducts = [
    {
        name:"Fairy Eggplant",
        price:1.00,
        category:"vegetable"
    },
    {
        name : "Organic Goddess Melon",
        price:4.99,
        category:"fruit"
    },
    {
        name:"Organic Mini Seedless Watermelon",
        price:3.99,
        category:"fruit"
    },
    {
        name:"Organic Celery",
        price:1.50,
        category:"vegetable"
    },
    {
        name:"Chocolate Whole Milk",
        price:2.69,
        category:"Dairy"
    }
]

Product.insertMany(seedProducts)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err.errors)
    })
    