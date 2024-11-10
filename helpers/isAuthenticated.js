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

function validatePassword(req, res, next) {
  try {
    const { password, repeatpassword } = req.body;
    if (!password || !repeatpassword) {
      throw new Error("Please fill the password!");
      // errors = "Please fill the password!";
    }

    if (password !== repeatpassword) {
      throw new Error("Password not matched");
      // errors = "Password not matched!";
    }

    // throw new Error(res.status(400).json(errors));
    // if (errors) res.redirect(`/register?error=${errors}`);
    // kembali ke login
    // else
    next();
  } catch (error) {
    res.redirect(`/register?errorPassword=${error.message}`);
  }
}

module.exports = { isAuthenticated, authorizeRole, validatePassword };
