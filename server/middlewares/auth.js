

module.exports = function (req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    // res.render("admin/login");
  }
}
