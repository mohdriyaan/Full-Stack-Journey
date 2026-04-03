const mongoose = require("mongoose")
const Review = require("./review")
const mongoosePaginate = require("mongoose-paginate-v2")

const imgSchema = mongoose.Schema(
    {
        url: String,
        filename: String
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)
imgSchema.virtual("thumbnail").get(function () {
    return this.url.replace("/upload", "/upload/w_200")
})

const opts = { toJSON: { virtuals: true }, timestamps: true };

const CampgroundSchema = mongoose.Schema({
    title: String,
    images: [imgSchema],
    price: Number,
    description: String,
    location: String,
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
},opts)

CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <strong><a href="/campgrounds/${this._id}">${this.title}</a></strong>
    <p>${this.description.substring(0, 20)}...</p>`
});

CampgroundSchema.plugin(mongoosePaginate);

CampgroundSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: { $in: doc.reviews }
        })
    }
})

const Campground = mongoose.model("Campground", CampgroundSchema)

module.exports = Campground