const mongoose = require("mongoose")
const Campground = require("../models/campground")
const cities = require("./cities")
const {places,descriptors} = require("./seedHelpers")

mongoose.connect("mongodb://localhost:27017/yelp-camp")
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err.errors)
    })

const random = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}

const seedDB = async () =>{
    await Campground.deleteMany({})
    for(let i = 0; i<50; i++){
        const random1000 = Math.floor(Math.random()* 1000)
        const price = Math.floor(Math.random()*20) + 10
        const camp = await new Campground({
            location:`${cities[random1000].city} , ${cities[random1000].state}`,
            // title : `${places[Math.floor(Math.random()*places.length)]} ${descriptors[Math.floor(Math.random()*descriptors.length)]}`
            title: `${random(places)}  ${random(descriptors)}`,
            image: `https://picsum.photos/id/${random1000}/400/300`,
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad alias aperiam voluptatum minus amet impedit natus et ducimus qui? Ex cum architecto, aut dicta incidunt quis possimus iusto blanditiis dolorem.",
            price
        })
        await camp.save()
    }
}

seedDB()



