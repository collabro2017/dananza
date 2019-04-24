'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    adza_id: DataTypes.INTEGER,
    channel_id: DataTypes.INTEGER,
    media_type: DataTypes.STRING,
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    featured_photo: DataTypes.STRING,
    description: DataTypes.STRING,
    insert_date: DataTypes.DATE
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
  };
  return Listing;
};