'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    content: DataTypes.STRING,
    post_time: DataTypes.DATE,
    featured_image: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};