const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const moment = require('moment');
console.log(moment().format('L'));

class Post extends Model { }

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;