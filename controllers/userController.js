class UserController {
  // read
  static async loginUser(req, res) {
    try {
      // memasukkan data yang dipanggil
      const data = {
        title: "Login User",
      };
      res.render("login", { data });
    } catch (error) {
      res.send(error);
    }
  }

  // showCreate (form)
  static async registerUser(req, res) {
    try {
      // memasukkan data yang dipanggil
      const data = {
        title: "Register User",
      };

      res.send(data);

      // res.render("register", { data });
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
    } catch (error) {
      res.send(error);
    }
  }

  
  // updateUser
  static async updateUser(req, res) {
    try {
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
