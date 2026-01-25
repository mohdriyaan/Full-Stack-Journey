const mongoose = require("mongoose")
const Review = require("./review")

const imgSchema = mongoose.Schema(
    {
        url:String,
        filename:String
    },
    {
        toJSON: {virtuals:true},
        toObject:{virtuals:true}
    }
)
imgSchema.virtual("thumbnail").get(function(){
    return this.url.replace("/upload","/upload/w_200")
})
const CampgroundSchema = mongoose.Schema({
    title:String,
    images:[imgSchema],
    price:Number,
    description:String,
    location:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

CampgroundSchema.post("findOneAndDelete", async function(doc){
    if(doc){
        await Review.deleteMany({
            _id:{$in : doc.reviews}
        })
    }
})

const Campground = mongoose.model("Campground",CampgroundSchema)

module.exports = Campground