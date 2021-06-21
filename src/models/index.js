`use strict`

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:'

const{Sequelize, DataTypes} = require ('sequelize');

const carModel = require('./car.js');
const makeModel = require('./make.js');
const gameModel = require('./game.js');
const Collection = require('./collection-class.js');
 
const sequelize = new Sequelize (DATABASE_URL ,{
    dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

const car = carModel(sequelize, DataTypes);
const make = makeModel(sequelize, DataTypes);
const game = gameModel(sequelize, DataTypes);


// created our Collections instances, pass a ('name' , model)
const carCollection = new Collection ('car', car);
const makeCollection = new Collection ('make', make);
const gameCollection = new Collection ('game', game);

carCollection.createAssociation('hasMany',  makeCollection.model, {
  foreignKey: 'carId', 
  sourceKey: 'id'
});
makeCollection.createAssociation('belongsTo',  carCollection.model, {
  foreignKey: 'carId', 
  targetKey: 'id'
});

module.exports = {
  dataBase: sequelize, 
  carCollection,
  makeCollection,
  gameCollection
};
