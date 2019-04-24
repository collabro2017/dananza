'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign_Listing = sequelize.define('Campaign_Listing', {
    campaign_id: DataTypes.INTEGER,
    adza_id: DataTypes.INTEGER,
    listing_id: DataTypes.INTEGER,
    add_time: DataTypes.DATE
  }, {});
  Campaign_Listing.associate = function(models) {
    // associations can be defined here
  };
  return Campaign_Listing;
};