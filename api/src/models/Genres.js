const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('genres', { 
    id_genre: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {timestamps: false});
};