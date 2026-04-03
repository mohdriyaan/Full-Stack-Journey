const User = require("../models/user")
const Campground = require("../models/campground")
const crypto = require("crypto")

module.exports.renderRegister = (req, res) => {
    res.render("users/register")
}

module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const user = new User({ username, email })
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err => {
            if (err) return next(err)
            req.flash("success", "Welcome to Yelp Camp!")
            res.redirect("/campgrounds")
        })
    } catch (e) {
        req.flash("error", e.message)
        res.redirect("/register")
    }
}

module.exports.renderLogin = (req, res) => {
    res.render("users/login")
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = res.locals.returnTo || '/campgrounds'; // update this line to use res.locals.returnTo now
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        req.flash("success", "Goodbye!")
        res.redirect("/campgrounds")
    })
}

module.exports.showProfile = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        req.flash('error', 'Cannot find that user!');
        return res.redirect('/campgrounds');
    }
    const campgrounds = await Campground.find({ author: req.params.id }).populate('author');
    const likedCampgrounds = await Campground.find({ likes: req.params.id }).populate('author');
    const reviews = await require('../models/review').find({ author: req.params.id }).populate('campground');
    res.render('users/show', { userProf: user, campgrounds, likedCampgrounds, reviews });
}

module.exports.renderForgot = (req, res) => {
    res.render('users/forgot');
}

module.exports.forgot = async (req, res) => {
    const token = crypto.randomBytes(20).toString('hex');
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        req.flash('error', 'No account with that email address exists.');
        return res.redirect('/forgot');
    }

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `http://${req.headers.host}/reset/${token}`;
    req.flash('success', `An email has been sent. For demo purposes, here is the reset link: ${resetUrl}`);
    res.redirect('/forgot');
}

module.exports.renderReset = async (req, res) => {
    const user = await User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/forgot');
    }
    res.render('users/reset', { token: req.params.token });
}

module.exports.reset = async (req, res) => {
    const user = await User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('back');
    }
    if (req.body.password === req.body.confirm) {
        await user.setPassword(req.body.password);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
        req.login(user, err => {
            if (err) return next(err);
            req.flash('success', 'Success! Your password has been changed.');
            res.redirect('/campgrounds');
        });
    } else {
        req.flash('error', 'Passwords do not match.');
        res.redirect('back');
    }
}