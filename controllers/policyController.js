const { Policy } = require("../models");

class PolicyController {
  static async readPolicy(req, res) {
    try
    {
      const profile = await Policy.readAllPolicy()
      
      
      const data = {
        title: "Policy"
      }
      res.send(profiles)
    } catch (error) {
      res.send(error);
    }
  }

  static async readPolicyByProfileId(req, res) {
    try {
      const { profileId } = req.params;
      const profile = await Policy.readPolicyByProfileId(profileId)
      
      
      const data = {
        title: "Policy"
      }
      res.send(profile);
    } catch (error) {
      res.send(error);
    }
  }
  static async addPolicyForm(req, res) {
    try
    {
      const data = {
        title: "Policy Form"
      }
    } catch (error) {
      res.send(error);
    }
  }

  static async createPolicy(req, res) {
    try {
    } catch (error) {
      res.send(error);
    }
  }

  static async updatePolicyForm(req, res) {
    try
    {
      const data = {
        title: "Update Policy Form"
      }
    } catch (error) {
      res.send(error);
    }
  }

  static async updatePolicy(req, res) {
    try {
    } catch (error) {
      res.send(error);
    }
  }

  static async deletePolicy(req, res) {
    try {
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = PolicyController;
