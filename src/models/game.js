'use strict';

const gameModel = (sequelize, DataTypes) => {
  return sequelize.define('Game', {
    name:{
      type: DataTypes.STRING,
      require: true,
    },
    type:{
      type: DataTypes.STRING,
      require:true,
    },
    players:{
      type: DataTypes.INTEGER,
    }
  })
}

module.exports = gameModel;
