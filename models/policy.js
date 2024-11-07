"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Policy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Policy.belongsTo(models.User, { foreignKey: "customerId" });
      Policy.belongsTo(models.User, { foreignKey: "agentId" });
      Policy.belongsTo(models.Type, { foreignKey: "typeId" });
    }
  }
  Policy.init(
    {
      customerId: DataTypes.INTEGER,
      policyNumber: DataTypes.STRING,
      typeId: DataTypes.STRING,
      premium: DataTypes.INTEGER,
      policyCreatedAt: DataTypes.DATE,
      agentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Policy",
    }
  );
  return Policy;
};
