const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('characters', { 
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age:  {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    history:  {
      type: DataTypes.STRING,
      allowNull: true
    },
    image:  {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {timestamps: false});
};