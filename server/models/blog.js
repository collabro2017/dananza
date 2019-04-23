'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    prod_name: DataTypes.STRING,
    prod_desc: DataTypes.STRING,
    prod_price: DataTypes.FLOAT
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};