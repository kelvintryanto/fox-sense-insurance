const { Profile } = require("../models");

class ProfileController {
  static async readProfile(req, res) {
    try {
      console.log("masuk Controller.readProfile", 4);
      const user = req.session.user;
      const profile = req.session.profile;
      const data = {
        title: "Profile",
      };
      res.render("profile/readProfile", { data, user, profile });
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
      console.log(fullName, birthPlace, birthDate, gender, phoneNumber);
      const id = req.session.user.user.Profile.userId;
      console.log(+id);
      await Profile.update(
        {
          fullName: fullName,
          birthPlace: birthPlace,
          birthDate: birthDate,
          gender: gender,
          phoneNumber: phoneNumber,
        },
        {
          where: {
            userId: id,
          },
        }
      );
      console.log(updatedProfile);
      res.redirect("/profile");
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
