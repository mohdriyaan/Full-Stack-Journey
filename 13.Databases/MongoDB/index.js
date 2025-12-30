const mongoose = require("mongoose")
mongoose
    .connect("mongodb://localhost:27017/movieApp")
    .then(()=>{
        console.log("MongoDB connected successfully")
    })
    .catch((err)=>{
        console.error("MongoDB Connection Error : ", err)
    })

const moviesSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})

const Movie = mongoose.model("Movie",moviesSchema)
// const amadesus = new Movie({title:"Amadeus",year:1986,score:9.2,rating:"R"})

Movie.insertMany([
    {title:"Amelia",year:2001,score:8.3,rating:"R"},
    {title:"Alien",year:1979,score:8.1,rating:"R"},
    {title:"The Iron Giant",year:1999,score:7.5,rating:"PG"},
    {title:"Stand By ME",year:1986,score:8.6,rating:"R"},
    {title:"Moonrise Kingdom",year:2012,score:9.2,rating:"PG-13"}
])
.then(data=>{
    console.log("It worked")
    console.log(data)
})
