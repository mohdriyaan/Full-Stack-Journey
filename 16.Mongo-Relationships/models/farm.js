const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
    .then(()=>{
        console.log("DB connected Successfully!")
    })
    .catch((err)=>{
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    season:{
        type:String,
        enum:["Summer","Winter","Spring","Fall"]
    }
})

const farmSchema = new mongoose.Schema({
    name:String,
    city:String,
    products:[{type : mongoose.Schema.Types.ObjectId,ref:"Product"}]
})

const Product = mongoose.model("Product",productSchema)
const Farm = mongoose.model("Farm",farmSchema)

// Product.insertMany([
//     {name:"Goddess Melon",price:4.99, season:"Summer"},
//     {name:"WaterMelon",price:4.99, season:"Summer"},
//     {name:"Aspargus",price:5.09, season:"Spring"},
// ]
// )

// const makeFarm = async() => {
//     const farm = new Farm({
//         name:"Full Belly Farm",
//         city:"New Jersey"
//     })

//     const melon = await Product.findOne({name:"Goddess Melon"})

//     farm.products.push(melon)

//     const res = await farm.save()
//     console.log(res)
// }

const addProduct = async() => {
    const farm = await Farm.findOne({name:"Full Belly Farm"})
    const watermelon = await Product.findOne({name:"WaterMelon"})
    farm.products.push(watermelon)
    const res = await farm.save()
    console.log(res)
}

// makeFarm()
// addProduct()

// Without populate
// const farmProds = async() => {
//     const farm = await Farm.find({})
//     console.log(farm) 
// }

// farmProds()


// With populate
Farm.findOne({name:"Full Belly Farm"})
    .populate("products")
    .then((farm)=>console.log(farm))
