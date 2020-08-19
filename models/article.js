'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    authorId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};