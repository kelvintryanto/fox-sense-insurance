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
      User.hasMany(models.Policy, { foreignKey: "agentId" });
      User.hasMany(models.Policy, { foreignKey: "customerId" });
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

    static async findUserWithId(userId) {
      try {
        return await User.findByPk(userId);
      } catch (error) {
        throw error;
      }
    }

    static async createUser(email, password) {
      try
      {        
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        return await User.create({
          email: email,
          password: hashedPassword,
          role: "Agent",
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } catch (error) {
        throw error;
      }
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Email address must be valid",
          },
          async isUnique(value) {
            return await User.findOne({ where: { email: value } }).then((email) => {
              if (email) {
                throw new Error("Email already registered");
              }
            });
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Please enter the password" },
          notEmpty: { msg: "Please enter the password" },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
