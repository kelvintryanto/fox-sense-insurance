class UserController {
  static async loginUser(req, res) {
    try {
      res.render("login");
    } catch (error) {
      res.send(error);
    }
  }

  static async registerUser(req, res) {
    try {
      res.render("register");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}

module.exports = UserController;
