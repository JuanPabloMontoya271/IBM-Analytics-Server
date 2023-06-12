const express = require("express");
const { isLoggedIn } = require("../lib/auth.js");
const timeseries = require("../controllers/timeseries");
const distribution = require("../controllers/distribution");
const barlist = require("../controllers/barlist.js");
const queries = require("../controllers/queries");
const router = express.Router();

router.route("/timeseries").get(isLoggedIn, timeseries.get);
router.route("/distribution/:variable").get(isLoggedIn, distribution.get);
router.route("/barlist/:variable").get(isLoggedIn, barlist.get);
router.route("/query").post(isLoggedIn, queries.get);

module.exports = router;
