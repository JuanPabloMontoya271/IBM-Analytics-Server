module.exports = {
  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res
        .status(200)
        .json({ response: "Authentication failed", success: false });
    }
  },

  isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.status(200).json({ response: "Welcome", success: true });
    }
  },
};
