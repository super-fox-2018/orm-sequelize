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

    return queryInterface.bulkInsert("Articles", [
      {
        title: "The hurricane",
        body: "This is the eye of the hurricane, this is my first refrain",
        AuthorId: 6,
        TagId: 3
      },
      {
        title: "My shot",
        body: "I'm not throwing away my shot",
        AuthorId: 6,
        TagId: 2
      },
      {
        title: "Satisfied",
        body: "i hope you're satisfied",
        AuthorId: 7,
        TagId: 1
      },
      {
        title: "The Tom Cat",
        body: "Named a tom cat after him",
        AuthorId: 5,
        TagId: 4
      },
      {
        title: "Helpless",
        body: "I look into your eyes and the sky's the limit",
        AuthorId: 7,
        TagId: 6
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
