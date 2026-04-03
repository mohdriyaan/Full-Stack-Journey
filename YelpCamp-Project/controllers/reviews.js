const Campground = require("../models/campground")
const Review = require("../models/review")

module.exports.createReview = async(req,res)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    if (!campground) {
        req.flash("error", "Campground not found!");
        return res.redirect("/campgrounds");
    }
    const {rating, body} = req.body
    const review = new Review({rating, body})
    review.author = req.user._id
    campground.reviews.push(review)
    await review.save()
    await campground.save()
    req.flash("success","Created new review!")
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteReview = async(req,res)=>{
    const {id,reviewId} = req.params
    await Campground.findByIdAndUpdate(id,{$pull : {reviews : reviewId}})
    await Review.findByIdAndDelete(reviewId)
    req.flash("success","Successfully deleted the review!")
    res.redirect(`/campgrounds/${id}`)
}