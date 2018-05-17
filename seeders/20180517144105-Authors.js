'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Authors", [
      {
        firstName: "james",
        lastName: "madison",
        religion: "christian",
        gender: "male",
        age: 55
      },
      {
        firstName: "alexander",
        lastName: "hamilton",
        religion: "agnostic",
        gender: "male",
        age: 40
      },
      {
        firstName: "angelica",
        lastName: "schuyler",
        religion: "agnostic",
        gender: "female",
        age: 35
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
