'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Movie_Shelves', [
      {
        movie_id: 1,
        shelf_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 3,
        shelf_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 5,
        shelf_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 2,
        shelf_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 2,
        shelf_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 5,
        shelf_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 3,
        shelf_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 4,
        shelf_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 5,
        shelf_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 6,
        shelf_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Movie_Shelves', null, {});
  }
};
