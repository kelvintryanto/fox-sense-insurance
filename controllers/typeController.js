class TypeController {
  static async readType(req, res) {
    try {
      const data = {
        title: "Type"
      }
    } catch (error) {
      res.send(error)
    }
  }
  
  static async addTypeForm(req, res) {
    try {
      const data = {
        title: "Create Type Form"
      }
    } catch (error) {
      res.send(error)
    }
  }
  
  static async createType(req, res) {
    try {
      
    } catch (error) {
      res.send(error)
    }
  }
  
  static async updateTypeForm(req, res) {
    try {
      const data = {
        title: "Update Type Form"
      }
    } catch (error) {
      res.send(error)
    }
  }
  
  static updateType(req, res) {
    try {
      
    } catch (error) {
      res.send(error)
    }
  }
  
  static deleteType(req, res) {
    try {
      
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = TypeController;
