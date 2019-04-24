'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Saved_Adzas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buyer_id: {
        type: Sequelize.INTEGER
      },
      adza_id: {
        type: Sequelize.INTEGER
      },
      listing_id: {
        type: Sequelize.INTEGER
      },
      save_time: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Saved_Adzas');
  }
};