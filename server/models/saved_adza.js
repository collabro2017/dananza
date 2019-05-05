'use strict';
module.exports = (sequelize, DataTypes) => {
  const Saved_Adza = sequelize.define('Saved_Adza', {
    buyer_id: DataTypes.INTEGER,
    adza_id: DataTypes.INTEGER,
    listing_id: DataTypes.INTEGER,
    save_time: DataTypes.DATE
  }, {
    underscored: true
  });
  Saved_Adza.associate = function(models) {
    // associations can be defined here
  };
  return Saved_Adza;
};