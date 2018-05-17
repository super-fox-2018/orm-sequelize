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

    return queryInterface.bulkInsert('Authors', [{
        firstName: 'erwin',
        lastName: 'ramadan',
        religion: 'islam',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'cu chu',
        lastName: 'lain',
        religion: 'islam',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'ryougi',
        lastName: 'shiki',
        religion: 'buddha',
        gender: 'female',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'nara',
        lastName: 'shikamaru',
        religion: 'islam',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
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
