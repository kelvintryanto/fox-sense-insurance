class ProfileController {
  static async readProfile(req, res) {
    try {
      console.log("masuk Controller.readProfile", 4);
      const user = req.session.user;
      console.log(user);
      const data = {
        title: "Profile",
      };
      res.render("profile/readProfile", { data, user });
    } catch (error) {
      res.send(error);
    }
  }

  static async addProfileForm(req, res) {
    try {
      const data = {
        title: "Create Profile",
      };
    } catch (error) {
      res.send(error);
    }
  }

  static async createProfile(req, res) {
    try {
    } catch (error) {
      res.send(error);
    }
  }

  static async updateProfileForm(req, res) {
    try {
      console.log("Masuk ProfileController.updateProfileForm");
      const user = req.session.user.user;
      const profile = req.session.user.user.Profile;
      const data = {
        title: "Update Profile",
      };
      res.render("profile/updateProfileForm", { data, user, profile });
    } catch (error) {
      res.send(error);
    }
  }

  static async updateProfile(req, res) {
    try {
      const { fullName, birthPlace, birthDate, gender, phoneNumber } = req.body;
      const id = req.session.user.user.id;
      const updatedUser = await User.updateProfile(id, fullName, birthPlace, birthDate, gender, phoneNumber);
      
      
    } catch (error) {
      res.send(error);
    }
  }

  static async deleteProfile(req, res) {
    try {
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = ProfileController;
