const express = require("express")
const router = express.Router()
const {isLoggedIn,validateCampground,isAuthor} = require("../middleware")
const campgrounds = require("../controllers/campground")
const catchAsync = require("../utils/catchAsync")
const multer = require("multer")
const {storage} = require("../cloudinary")
const upload = multer({storage})

router.route("/")
    .get(catchAsync(campgrounds.index))
    // console.log(campgrounds)
    .post(isLoggedIn, upload.array("image"), validateCampground, catchAsync(campgrounds.createCampground))

router.get("/new",isLoggedIn,campgrounds.newForm)

router.route("/:id")
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn,isAuthor, upload.array("image"), validateCampground,catchAsync(campgrounds.editCampground))
    .delete(isLoggedIn,isAuthor,catchAsync(campgrounds.deleteCampground))

router.post("/:id/like", isLoggedIn, catchAsync(campgrounds.toggleLike))

router.get("/:id/edit",isLoggedIn,isAuthor,catchAsync(campgrounds.editForm))

module.exports = router
