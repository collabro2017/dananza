'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adza_Profile = sequelize.define('Adza_Profile', {
    user_id: DataTypes.INTEGER,
    profile_photo: DataTypes.STRING,
    profile_description: DataTypes.STRING,
    signup_date: DataTypes.DATE,
    image_gallery: DataTypes.JSON,
    audience_male_percent: DataTypes.FLOAT,
    audience_age_min: DataTypes.INTEGER,
    audience_age_max: DataTypes.INTEGER,
    audience_locations: DataTypes.JSON,
    audience_interests: DataTypes.JSON,
    update_time: DataTypes.DATE
  }, {});
  Adza_Profile.associate = function(models) {
    // associations can be defined here
  };
  return Adza_Profile;
};