'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    user_from_id: DataTypes.INTEGER,
    user_to_id: DataTypes.INTEGER,
    message_text: DataTypes.STRING,
    message_time: DataTypes.DATE,
    buyer_user: DataTypes.INTEGER,
    is_new: DataTypes.BOOLEAN
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};