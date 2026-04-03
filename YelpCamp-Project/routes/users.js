const express = require("express")
const router = express.Router()
const passport = require("passport")
const { storeReturnTo } = require("../middleware")
const users = require("../controllers/users")

router.route("/register")
    .get(users.renderRegister)
    .post(users.register)


router.route("/login") 
    .get(users.renderLogin)
    .post(// use the storeReturnTo middleware to save the returnTo value from session to res.locals
    storeReturnTo,
    // passport.authenticate logs the user in and clears req.session
    passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
    // Now we can use res.locals.returnTo to redirect the user after login
    users.login)

router.get("/logout", users.logout)

const catchAsync = require("../utils/catchAsync")
router.get("/users/:id", catchAsync(users.showProfile))

router.route("/forgot")
    .get(users.renderForgot)
    .post(catchAsync(users.forgot))

router.route("/reset/:token")
    .get(catchAsync(users.renderReset))
    .post(catchAsync(users.reset))

module.exports = router