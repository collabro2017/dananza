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
      profile_description: {
        type: Sequelize.STRING
      },
      job_type: {
        type: Sequelize.STRING
      },
      business_title: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      has_seller_acct: {
        type: Sequelize.BOOLEAN
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
