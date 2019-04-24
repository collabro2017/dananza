'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    buyer_id: DataTypes.INTEGER,
    adza_id: DataTypes.INTEGER,
    message_text: DataTypes.STRING,
    message_time: DataTypes.DATE,
    is_new: DataTypes.BOOLEAN
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};