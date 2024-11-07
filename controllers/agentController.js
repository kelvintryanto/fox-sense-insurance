class AgentController {
  static async showAgentHome(req, res) {
    try {
      res.render("homeAgent");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = AgentController;
