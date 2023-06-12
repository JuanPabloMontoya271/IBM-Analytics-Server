const axios = require("axios");
const cors = require("cors");
const flash = require("connect-flash");
const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session");
const logger = require("morgan");
const passport = require("passport");
const router = require("./routes");
const authentication = require("./routes/authentication");
const { client } = require("./cache.js");
const { database } = require("./keys");

const app = express();

app.use(
  session({
    secret: "db123",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);
app.use(flash());
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// Global Variables
app.use((req, res, next) => {
  app.locals.success = req.flash("success");
  app.locals.message = req.flash("message");
  app.locals.user = req.user;
  // Continue
  next();
});

require("./lib/passport");
app.use(router);
app.use(authentication);

app.listen("3001", () => {
  console.log("Listen on port 3001");
});
