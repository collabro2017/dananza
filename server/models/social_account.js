'use strict';
module.exports = (sequelize, DataTypes) => {
  const Social_Account = sequelize.define('Social_Account', {
    buyer_id: DataTypes.INTEGER,
    media_type: DataTypes.STRING,
    username: DataTypes.STRING,
    linked_account: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Social_Account.associate = function(models) {
    // associations can be defined here
  };
  return Social_Account;
};