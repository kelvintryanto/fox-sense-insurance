"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Profiles", {
      fields: ["userId"],
      type: "foreign key",
      name: "fk_Profiles_userId",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("Policies", {
      fields: ["customerId"],
      type: "foreign key",
      name: "fk_Policies_customerId",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("Policies", {
      fields: ["agentId"],
      type: "foreign key",
      name: "fk_Policies_agentId",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addConstraint("Policies", {
      fields: ["typeId"],
      type: "foreign key",
      name: "fk_Policies_typeId",
      references: {
        table: "Types",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Profiles", "fk_Profiles_userId");
    await queryInterface.removeConstraint("Policies", "fk_Policies_customerId");
    await queryInterface.removeConstraint("Policies", "fk_Policies_agentId");
    await queryInterface.removeConstraint("Type", "fk_Types_typeId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
