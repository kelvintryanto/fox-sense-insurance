class UserController {
  // read
  static async readUser(req, res) {
    try {
      // memasukkan data yang dipanggil
      const data = {
        title: "Login User",
      };
      res.render("user/login", { data });
    } catch (error) {
      res.send(error);
    }
  }

  // showCreate (form)
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

  // createUser
  static async createUser(req, res) {
    try {
      // kembali ke login
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }

  // updateUserForm
  static async updateUserForm(req, res) {
    try {
      const data = {
        title: "Change Password",
      };
      
      res.render("user/changepassword", {data})
    } catch (error) {
      res.send(error);
    }
  }

  // updateUser
  static async updateUser(req, res) {
    try
    {
      res.redirect('profile/profile')
    } catch (error) {
      res.send(error);
    }
  }

  // deleteUser harus pakai prompt dari front end pakai modal bootstrap
  // tulisannya are you sure to delete user?
  // https://getbootstrap.com/docs/5.3/components/modal/#how-it-works
  static async deleteUser(req, res) {
    try {
      // kembali ke login
      res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = UserController;
