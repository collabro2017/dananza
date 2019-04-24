'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    adza_id: DataTypes.INTEGER,
    buyer_id: DataTypes.INTEGER,
    review_point: DataTypes.FLOAT,
    review_description: DataTypes.STRING,
    review_date: DataTypes.DATE,
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};