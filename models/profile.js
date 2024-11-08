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

    static async updateProfile(userId, fullName, birthPlace, birthDate, gender, phoneNumber) {
      try {
        const newProfile = await Profile.update(
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

        return newProfile;
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
