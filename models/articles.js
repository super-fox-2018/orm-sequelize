'use strict';
module.exports = (sequelize, DataTypes) => {
  var Articles = sequelize.define('Article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    AuthorId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};