'use strict';
module.exports = (sequelize, DataTypes) => {
  var articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  articles.associate = function(models) {
    // associations can be defined here
  };
  return articles;
};