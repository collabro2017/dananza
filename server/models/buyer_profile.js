'use strict';
module.exports = (sequelize, DataTypes) => {
  const Buyer_Profile = sequelize.define('Buyer_Profile', {
    user_id: DataTypes.INTEGER,
    location: DataTypes.INTEGER,
    profession: DataTypes.INTEGER,
    has_seller_acct: DataTypes.BOOLEAN,
    profile_description: DataTypes.STRING,
    signup_date: DataTypes.DATE
  }, {});
  Buyer_Profile.associate = function(models) {
    // associations can be defined here
  };
  return Buyer_Profile;
};