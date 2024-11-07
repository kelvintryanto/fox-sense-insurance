// pilih antara user atau customer
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) next();
  else res.redirect("/login");
}

function authorizeRole(allowedRoles) {
  return (req, res, next) => {
    if (!req.session.user || !allowedRoles.includes(req.session.user.role)) {
      return res.status(403).json({ message: "Access denied!" });
    }
    next();
  };
}

module.exports = { isAuthenticated, authorizeRole };
