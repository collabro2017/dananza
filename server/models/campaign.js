'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    buyer_id: DataTypes.INTEGER,
    campaign_name: DataTypes.STRING,
    campaign_status: DataTypes.STRING,
    campaign_price: DataTypes.FLOAT,
    order_id: DataTypes.INTEGER
  }, {});
  Campaign.associate = function(models) {
    // associations can be defined here
  };
  return Campaign;
};