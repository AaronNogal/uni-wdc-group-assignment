var createError = require("http-errors");
var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/pages/index.html"));
});

router.get("/search", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/pages/search.html"));
});

// TODO: We should proably check with vue in the front end what the end of the url is, then use `{{ resturant_description }}` and so on to populate the data on the `resturant.html` page
router.get("/resturant/*", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/pages/resturant.html"));
});

router.get("/sign-up", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/pages/sign-up.html"));
});

router.get("/login", function(req, res, next) {
    res.sendFile(path.join(__dirname + "/../public/pages/login.html"));
});

router.get("/manage", function(req, res, next) {
    // NOTE: This might be something we would want to do.
    if (!req.user) {
        return next(createError(401, "Please login to view this page."));
    }

    res.sendFile(path.join(__dirname + "/../public/pages/manage.html"));
});

module.exports = router;
