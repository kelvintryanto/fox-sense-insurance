"use strict";
const bcrypt = require("bcryptjs");
const fs = require("fs").promises;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userJson = await fs.readFile("./data/user.json", "utf-8");
    const parsedUser = JSON.parse(userJson);
    const users = parsedUser.map((user) => {
      delete user.id;
      // membuat haspassword dengan bcrypt
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(user.password, salt);
      user.password = hashedPassword;
      user.role = "Agent";
      user.createdAt = user.updatedAt = new Date();
      return user;
    });

    // console.log(hashedPassword);
    // console.log(bcrypt.compareSync("12345", hashedPassword)); // true
    const usersInsert = await queryInterface.bulkInsert("Users", users, { returning: true });
    const profiles = usersInsert.map((profile) => {
      delete profile.email;
      delete profile.password;
      delete profile.role;
      profile.userId = profile.id;
      profile.createdAt = profile.updatedAt = new Date();
      return profile;
    });
    console.log(profiles);

    const userProfile = await queryInterface.bulkInsert("Profiles", profiles, { returning: true });
    console.log(userProfile);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
