'use strict';
module.exports = (sequelize, DataTypes) => {
  var Articles = sequelize.define('Article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};