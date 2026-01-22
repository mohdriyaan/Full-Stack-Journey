const express = require("express")
const router = express.Router()
const {isLoggedIn,validateCampground,isAuthor} = require("../middleware")
const campgrounds = require("../controllers/campground")

router.route("/")
    .get(campgrounds.index)
    .post(isLoggedIn,validateCampground,campgrounds.createCampground)

router.get("/new",isLoggedIn,campgrounds.newForm)

router.route("/:id")
    .get(campgrounds.showCampground)
    .put(isLoggedIn,isAuthor, validateCampground,campgrounds.editCampground)
    .delete(isLoggedIn,isAuthor,campgrounds.deleteCampground)

router.get("/:id/edit",isLoggedIn,isAuthor,campgrounds.editForm)

module.exports = router
