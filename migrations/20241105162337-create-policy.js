'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Policies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profileId: {
        type: Sequelize.INTEGER
      },
      policyName: {
        type: Sequelize.STRING
      },
      policyType: {
        type: Sequelize.STRING
      },
      premium: {
        type: Sequelize.INTEGER
      },
      policyCreated: {
        type: Sequelize.STRING
      },
      agentId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Policies');
  }
};