class ProfileController {
  static async readProfile(req, res) {
    try
    {
      const data = {
        title: "Profile"
      }
    } catch (error) {
      res.send(error);
    }
  }

  static async addProfileForm(req, res) {
    try
    {
      const data = {
        title: "Create Profile"
      }
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
    try
    {
      const data = {
        title: "Update Profile"
      }
    } catch (error) {
      res.send(error);
    }
  }

  static async updateProfile(req, res) {
    try {
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
