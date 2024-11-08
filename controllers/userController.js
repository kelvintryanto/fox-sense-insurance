const { User } = require("../models");
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
      const data = {
        title: "Login User",
      };
      res.render("user/login", { data });
    } catch (error) {
      res.send(error);
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findUserWithEmail(email);
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = {
          user: user,
        };

        // console.log(user.id);
        res.redirect("/profile");
      } else res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }

  static async createUserForm(req, res) {
    try {
      // memasukkan data yang dipanggil
      const data = {
        title: "Register User",
      };

      res.render("user/register", { data });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }

  // createUser tetap ada karena dibutuhkan saat membuat user
  static async createUser(req, res) {
    try {
      const { email, password } = req.body;
      console.log(email);
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.createUser(email, password);
      res.redirect("/login");
    } catch (error) {
      res.send(error);
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
