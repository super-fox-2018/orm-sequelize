'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {timestamps: false});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};