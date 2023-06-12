const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../lib/auth.js");
const { encryptPassword, matchPassword } = require("../lib/helpers");

const pool = require("../db");
router.get("/signin", (req, res, next) => {
  res.status(200).json({ response: "Welcome", success: true });
});
router.get("/failure", (req, res, next) => {
  res.status(200).json({ response: "Authentication failed", success: false });
});
router.post("/signin", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/api/signin",
    failureRedirect: "/api/failure",
    failureFlash: true,
  })(req, res, next);
});
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local.login", {
    successRedirect: "/api/signin",
    failureRedirect: "/api/failure",
    failureFlash: true,
  })(req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logOut((err) => {
    console.log(err);
  });
  res.status(200).json({ authentication: "logged out" });
});

module.exports = router;
