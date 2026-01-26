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
            author : "69707e5f61f8c8a03bd8dfdc",
            location:`${cities[random1000].city} , ${cities[random1000].state}`,
            // title : `${places[Math.floor(Math.random()*places.length)]} ${descriptors[Math.floor(Math.random()*descriptors.length)]}`
            title: `${random(places)}  ${random(descriptors)}`,
            // image: `https://picsum.photos/id/${random1000}/400/300`,
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad alias aperiam voluptatum minus amet impedit natus et ducimus qui? Ex cum architecto, aut dicta incidunt quis possimus iusto blanditiis dolorem.",
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images:[
                {
                    url: 'https://res.cloudinary.com/dagj0onkw/image/upload/v1769360531/YelpCamp/rkwecwo3ve0jiprudam9.jpg',
                    filename: 'YelpCamp/rkwecwo3ve0jiprudam9'
                },
                {
                    url: 'https://res.cloudinary.com/dagj0onkw/image/upload/v1769360530/YelpCamp/whb2v9yzd5xq4xs8bzvd.jpg',
                    filename: 'YelpCamp/whb2v9yzd5xq4xs8bzvd'
                },
                {
                    url: 'https://res.cloudinary.com/dagj0onkw/image/upload/v1769360532/YelpCamp/zc46iswexkupupdlhqen.jpg',
                    filename: 'YelpCamp/zc46iswexkupupdlhqen'
                }
            ]
        })
        await camp.save()
    }
}

seedDB()



