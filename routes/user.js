const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
// const { route } = require("./listing");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/users");

//Signup Routes
router
  .route("/signup")
  .get(userController.renderSignupForm) //GET request
  .post(wrapAsync(userController.signup)); //Post request

//Login Routes
router.route("/login")
.get(userController.renderLoginForm) //GET request
.post(                               //Post request
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

//Logout route
router.get("/logout", userController.logout);
module.exports = router;
