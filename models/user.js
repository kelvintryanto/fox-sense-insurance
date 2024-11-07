"use strict";
const bcrypt = require("bcryptjs");

const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, { foreignKey: "userId" });
    }

    static async findUserWithEmail(email) {
      try {
        const { Profile } = sequelize.models;
        const foundUser = await User.findOne({
          where: { email },
          include: Profile,
        });
        //   .then((user) => {
        //   if (user && bcrypt.compare(password, user.password)) {
        //     req.session.user = {
        //       id: user.id,
        //       email: user.email,
        //       name: user.Profile.fullName,
        //     };
        //   }
        // });
        return foundUser;
      } catch (error) {
        throw error;
      }
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
