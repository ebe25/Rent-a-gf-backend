'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Casts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      costPerHour: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Casts');
  }
};