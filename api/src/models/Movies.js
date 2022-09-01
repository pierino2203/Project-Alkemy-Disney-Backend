const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('movies', { 
    title:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    created:  {
      type: DataTypes.DATE,
      allowNull: false
    },
    image:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    qualification:  {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {timestamps: false});
};