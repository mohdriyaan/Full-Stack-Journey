const express = require("express")
const router = express.Router()
const {isLoggedIn,validateCampground,isAuthor} = require("../middleware")
const campgrounds = require("../controllers/campground")
const multer = require("multer")
const {storage} = require("../cloudinary")
const upload = multer({storage})

router.route("/")
    .get(campgrounds.index)
    // console.log(campgrounds)
    .post(isLoggedIn, upload.array("image"), validateCampground, campgrounds.createCampground)

router.get("/new",isLoggedIn,campgrounds.newForm)

router.route("/:id")
    .get(campgrounds.showCampground)
    .put(isLoggedIn,isAuthor, upload.array("image"), validateCampground,campgrounds.editCampground)
    .delete(isLoggedIn,isAuthor,campgrounds.deleteCampground)

router.get("/:id/edit",isLoggedIn,isAuthor,campgrounds.editForm)

module.exports = router
