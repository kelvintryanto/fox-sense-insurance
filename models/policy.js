"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Policy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Policy.init(
    {
      profileId: DataTypes.INTEGER,
      policyNumber: DataTypes.STRING,
      policyType: DataTypes.STRING,
      premium: DataTypes.INTEGER,
      policyCreatedAt: DataTypes.STRING,
      agentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Policy",
    }
  );
  return Policy;
};
