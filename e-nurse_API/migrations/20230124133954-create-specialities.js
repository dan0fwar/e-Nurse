"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Specialities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
   defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
   defaultValue: Sequelize.fn('now')

      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Specialities");
  },
};
