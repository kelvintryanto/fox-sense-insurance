"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, { foreignKey: "userId" });
    }

    toIsoTime() {
      console.log(this.birthDate.toIsoTime().split("T")[0]);
      return;
    }

    static async createProfileWithUserId(userId) {
      try {
        console.log("Get Into Model Profile.createProfileWithUserId: ", userId, 22);
        return await Profile.create({
          userId: userId,
        });
      } catch (error) {
        throw error;
      }
    }

    static async updateProfile(userId, fullName, birthPlace, birthDate, gender, phoneNumber) {
      try {
        console.log("masuk model update profile");
        return await Profile.update(
          {
            fullName,
            birthPlace,
            birthDate,
            gender,
            phoneNumber,
          },
          {
            where: {
              userId: userId,
            },
          }
        );
      } catch (error) {
        throw error;
      }
    }
  }
  Profile.init(
    {
      userId: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      birthPlace: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      gender: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
