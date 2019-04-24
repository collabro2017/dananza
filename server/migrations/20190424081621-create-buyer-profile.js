'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buyer_Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      has_seller_acct: {
        type: Sequelize.BOOLEAN
      },
      profile_description: {
        type: Sequelize.STRING
      },
      signup_date: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buyer_Profiles');
  }
};
