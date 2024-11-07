function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) next();
  else res.redirect("/login");
}

module.exports = isAuthenticated;
