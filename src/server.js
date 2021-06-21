'use strict'

// bring in Express web framework for Node.js
const express = require ('express');

// custom modules
const carRouter = require('./routes/car.js');
const gameRouter = require('./routes/game.js');
const makeRouter = require('./routes/make.js');

const logger = require ('./middlewares/logger.js');
const validator = require ('./middlewares/validator.js');

const err404 = require ('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');

const app = express();

app.use(express.json());

// routes
app.use(carRouter);
app.use(gameRouter);
app.use(makeRouter);

// middleware
app.use(logger);
app.use(validator);

app.use(err404);
app.use(err500);

module.exports = {
  app: app,
  start:(PORT)=> {
    app.listen(PORT, () => console.log('Server is Running'))
  },
}
