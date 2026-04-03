const Campground = require("../models/campground")
const {cloudinary} = require("../cloudinary")
const ExpressError = require("../utils/ExpressError")
const mapTilerClient = require("@maptiler/client")
mapTilerClient.config.apiKey = process.env.MAPTILER_API_KEY


module.exports.index = async (req, res, next) => {
    let query = {};
    if (req.query.search) {
        query = { title: { $regex: req.query.search, $options: 'i' } };
    }
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    
    // Extract everything except 'page' from req.query so we can append them to pagination links
    const { page: ignoredPage, ...restQuery } = req.query;
    const queryParams = new URLSearchParams(restQuery).toString();

    const campgrounds = await Campground.paginate(query, {
        page,
        limit,
        sort: { _id: -1 } // newest first
    });
    
    res.render("campgrounds/index", { campgrounds, queryParams, searchQuery: req.query.search });
}

module.exports.newForm = (req,res)=>{
    res.render("campgrounds/new")
}

module.exports.createCampground = async(req,res,next)=>{
    const geoData = await mapTilerClient.geocoding.forward(req.body.location, { limit: 1 });
    
    // console.log(geoData)

    if (!geoData.features?.length) {
        req.flash('error', 'Could not geocode that location. Please try again and enter a valid location.');
        return res.redirect('/campgrounds/new');
    }


    const campground = new Campground(req.body)

    campground.geometry = geoData.features[0].geometry
    campground.location = geoData.features[0].place_name

    campground.images = req.files.map((f)=>({url:f.path,filename:f.filename}))
    campground.author = req.user._id
    
    await campground.save()
    req.flash("success","Successfully made a new campground!")
    res.redirect(`/campgrounds/${campground._id}`)    
}

module.exports.showCampground = async(req,res,next)=>{
    const {id} = req.params
    const campground = await Campground.findById(id).populate({
        path : "reviews",
        populate:{
            path:"author"
        }
    }).populate("author")
    if(!campground){
        req.flash("error","Cannot find that campground!")
        return res.redirect("/campgrounds")
    }
    res.render("campgrounds/show",{campground})       
}

module.exports.editForm = async(req,res,next)=>{
    const {id} = req.params
    const campground = await Campground.findById(id)
    if(!campground){
        req.flash("error","Cannot find that campground!")
        return res.redirect("/campgrounds")
    }
    res.render("campgrounds/edit",{campground})
}

module.exports.editCampground = async(req,res,next)=>{
    if(!req.body){
        throw new ExpressError("Invalid Campground Data",400)
    }
    const {id} = req.params

    const geoData = await mapTilerClient.geocoding.forward(req.body.location, { limit: 1 });
    if (!geoData.features?.length) {
        req.flash('error', 'Could not geocode that location. Please try again and enter a valid location.');
        return res.redirect(`/campgrounds/${id}/edit`);
    }

    const campground = await Campground.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    
    campground.geometry = geoData.features[0].geometry;
    campground.location = geoData.features[0].place_name;
    
    const imgs = req.files.map((f)=>({url:f.path,filename:f.filename}))
    campground.images.push(...imgs)
    await campground.save()
    if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename)
        }
        await campground.updateOne({$pull:{images:{filename:{$in:req.body.deleteImages}}}})
    }
    req.flash("success","Successfully updated the campground!")
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteCampground = async(req,res,next)=>{
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    req.flash("success","Successfully deleted campground!")
    res.redirect("/campgrounds")
}

module.exports.toggleLike = async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }

    const foundUserLike = campground.likes.some(user => user.equals(req.user._id));
    if (foundUserLike) {
        // user already liked, remove like
        campground.likes.pull(req.user._id);
    } else {
        // user hasn't liked, add like
        campground.likes.push(req.user._id);
    }

    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}