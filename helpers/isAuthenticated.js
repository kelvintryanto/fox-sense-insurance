// pilih antara user atau customer
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) next();
  else res.redirect("/login");
}

function authorizeRole(allowedRoles) {
  return (req, res, next) => {
    console.log(allowedRoles, req.session.user.user.role);
    console.log(allowedRoles.includes(req.session.user.user.role));

    if (!req.session.user || !allowedRoles.includes(req.session.user.user.role)) {
      return res.status(403).json({ message: "Access denied!" });
    }
    next();
  };
}

function validatePassword(req, res, next) {
  const { password, repeatpassword } = req.body;
  if (!password || !repeatpassword) {
    return res.status(400).json({ message: "Password dan Repeat Password wajib diisi!" });
  }

  if (password !== repeatpassword) {
    return res.status(400).json({ message: "Password tidak cocok!" });
  }
  // kembali ke login
  next();
}

module.exports = { isAuthenticated, authorizeRole, validatePassword };
