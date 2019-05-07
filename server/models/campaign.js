'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    BuyerProfileId: DataTypes.INTEGER,
    campaign_name: DataTypes.STRING,
    campaign_status: DataTypes.STRING,
    campaign_price: DataTypes.FLOAT,
    OrderId: DataTypes.INTEGER
  }, {});
  Campaign.associate = function(models) {
    // associations can be defined here
  };
  return Campaign;
};