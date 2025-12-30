const mongoose = require("mongoose")
mongoose
    .connect("mongodb://localhost:27017/shopApp")
    .then(()=>{
        console.log("MongoDB connected successfully")
    })
    .catch((err)=>{
        console.error("MongoDB Connection Error : ", err)
    })

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20
    },
    price:{
        type:Number,
        required:true,
        min:[0,"Price must be positive!!"]
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:{
        type:[String]
    },
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum:["S","M","L"]
    }
})

productSchema.methods.greet = function(){
    console.log("Hello Hi howdy!!")
    console.log(`- from ${this.name}`)
}

const Product = mongoose.model("Product",productSchema)

const bike = new Product({name:"cycling Jersey", price:29.5,categories:["Cycling","Safety"],size:"L"})

const findProduct = async () => {
    const foundProduct = await Product.findOne({name:"Bike Helmet"})
    foundProduct.greet()
}

findProduct()

bike.save()
    .then((data)=>{
        console.log("It worked")
        console.log(data)
    })
    .catch((err)=>{
        console.log("Error :",err.errors)
    })

// Product.findOneAndUpdate({name:"Tire Pump"},{price:-1100},{new:true,runValidators:true})
//     .then(data=>{
//         console.log("It worked")
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log("Error :",err.errors)
//     })
