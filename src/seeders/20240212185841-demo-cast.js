"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Casts", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        age: 21, 
        description: "very handpump", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Pallav",
        lastName: "Singh",
        email: "asdf@gmail.com",
        age: 23, 
        description: "very sexy",
        createdAt: new Date(),
        updatedAt: new Date() 
        
      },
    ]);
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
