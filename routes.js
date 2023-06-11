const express = require("express");
const timeseries = require("./controllers/timeseries");
const distribution = require("./controllers/distribution");
const barlist = require("./controllers/barlist.js");
const router = express.Router();

router.route("/timeseries").get(timeseries.get);
router.route("/distribution/:variable").get(distribution.get);
router.route("/barlist/:variable").get(barlist.get);

module.exports = router;
