const { User, Profile } = require("../models");
const bcrypt = require("bcryptjs");

class UserController {
  static async showLandingPage(req, res) {
    try {
      const data = {
        title: "Landing Page",
      };
      res.render("landingpage", { data });
    } catch (error) {
      res.send(error);
    }
  }

  // read
  static async readUser(req, res, next) {
    try {
      // jika sudah login langsung masuk saja ke profil next
      if (req.session && req.session.user) next();
      const { errors } = req.query;
      const data = {
        title: "Login User",
        errors,
      };
      res.render("user/login", { data });
    } catch (error) {
      res.send(error);
    }
  }

  static async loginUser(req, res) {
    try {
      if (req.session && req.session.user) res.redirect("/profile");
      const { email, password } = req.body;
      const user = await User.findUserWithEmail(email);
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        req.session.profile = user.Profile;

        res.redirect("/profile");
      } else {
        throw new Error("Incorrect Email or Password");
      }
    } catch (error) {
      if (error) res.redirect(`/login?errors=${error.message}`);
      else res.send(error);
    }
  }

  static async createUserForm(req, res) {
    try {
      const { errorPassword, errorEmail } = req.query;
      const data = {
        title: "Register User",
        errorPassword,
        errorEmail,
      };

      res.render("user/register", { data });
    } catch (error) {
      res.send(error);
    }
  }

  static async createUser(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.createUser(email, password);
      // kalau berhasil buat user maka buat profilenya
      await Profile.createProfileWithUserId(user.id);

      res.redirect("/profile");
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        res.redirect(`/register?errorEmail=${error.errors[0].message}`);
      } else res.send(error);
    }
  }

  static async changePassword(req, res) {
    try {
      res.render("user/changePassword");
    } catch (error) {
      res.send(error);
    }
  }

  // updateUserForm
  // masuk ke sini ketika sudah didaftarkan polisnya
  static async updateUserForm(req, res) {
    try {
      const data = {
        title: "Change Email & Password",
      };

      res.render("user/changeemailpassword", { data });
    } catch (error) {
      res.send(error);
    }
  }

  // updateUser
  //
  static async updateUser(req, res) {
    try {
      // redirect ke login ketika sudah update user karena harus login
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }

  // deleteUser ditiadakan karena kalau dihapus akan hilang data polisnya juga
  // static async deleteUser(req, res) {
  //   try {
  //     // kembali ke login
  //     res.redirect("/");
  //   } catch (error) {
  //     res.send(error);
  //   }
  // }

  static async logout(req, res) {
    try {
      req.session.destroy();
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = UserController;
