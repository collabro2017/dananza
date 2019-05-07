'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BuyerProfileId: {
        type: Sequelize.INTEGER
      },
      AdzaProfileId: {
        type: Sequelize.INTEGER
      },
      message_text: {
        type: Sequelize.STRING
      },
      message_time: {
        type: Sequelize.DATE
      },
      is_new: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};