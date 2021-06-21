'use strict'

const carModel = (sequelize, DataTypes) => {
  return sequelize.define('Car', {
    name: {
      type: DataTypes.STRING,
      require: true,
    },
    color: {
      type: DataTypes.STRING,
      require: true,
    },
    doors: {
      type: DataTypes.INTEGER,
    }
  })
}

module.exports = carModel;
