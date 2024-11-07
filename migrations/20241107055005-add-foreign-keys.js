"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Profiles", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_profiles_userId",
      references: {
        table: "Users", // Tabel target
        field: "id", // Kolom target
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    
    // todobykt sampai di sini sebelum pull 07/11/2024
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
