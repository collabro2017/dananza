'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    buyer_id: DataTypes.INTEGER,
    campaign_id: DataTypes.INTEGER,
    order_status: DataTypes.STRING,
    order_date: DataTypes.DATE
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};