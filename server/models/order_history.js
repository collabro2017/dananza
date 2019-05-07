'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_History = sequelize.define('Order_History', {
    OrderId: DataTypes.INTEGER,
    order_comment: DataTypes.STRING,
    order_status: DataTypes.STRING,
    update_time: DataTypes.DATE
  }, {});
  Order_History.associate = function(models) {
    // associations can be defined here
  };
  return Order_History;
};