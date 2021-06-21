'use strict'

const makeModel = (sequelize, DataTypes) => {
  return sequelize.define('Make', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
}

module.exports = makeModel;
