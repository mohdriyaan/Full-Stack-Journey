const express = require("express")
const router = express.Router()
const {isLoggedIn,validateCampground,isAuthor} = require("../middleware")
const campgrounds = require("../controllers/campground")

router.get("/", campgrounds.index)

router.get("/new",isLoggedIn,campgrounds.newForm)

router.post("/",isLoggedIn,validateCampground,campgrounds.createCampground)

router.get("/:id",campgrounds.showCampground)

router.get("/:id/edit",isLoggedIn,isAuthor,campgrounds.editForm)

router.put("/:id",isLoggedIn,isAuthor, validateCampground,campgrounds.editCampground)

router.delete("/:id",isLoggedIn,isAuthor,campgrounds.deleteCampground)

module.exports = router
