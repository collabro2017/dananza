'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'Adza_Profiles',
      'profile_location',
       Sequelize.STRING
    ),queryInterface.addColumn(
      'Order_Histories',
      'order_attachment',
       Sequelize.JSON
    ),queryInterface.addColumn(
      'Order_Histories',
      'order_type',
       Sequelize.STRING
    ),queryInterface.renameColumn(
      'Orders',
      'CampaignId',
      'Campaign_ListingId',
       Sequelize.INTEGER
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Adza_Profiles',
      'profile_location'
    ),queryInterface.removeColumn(
      'Order_Histories',
      'order_attachment'
    ),queryInterface.removeColumn(
      'Order_Histories',
      'order_type'
    ),queryInterface.renameColumn(
      'Orders',
      'Campaign_ListingId',
      'CampaignId',
       Sequelize.INTEGER
    );
  }
};
