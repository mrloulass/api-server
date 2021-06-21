'use strict'

const express = require('express');

const data = require('../models/index.js');

const router = express.Router();

router.get('/game', getAll);
router.get('/game/:gameId', getOne);
router.post('/game', create);
router.put('/game/:gameId', update);
router.delete('/game/:gameId', destroy);

async function getAll(req, res) {
  const gameItems = await data.game.findAll();
  res.status(200).send(gameItems);;
}

async function create(req, res) {
  const gameObject = req.body;
  const gameData = await data.game.create(gameObject);
  res.status(200).send(gameData);
}

async function getOne(req, res) {
  const gameId = req.params.gameId;
  const gameItem = await data.game.findOne({
    where: {
      id: gameId
    }
  });
  res.status(200).send(gameItem);
}

async function update(req, res) {
  const gameId = req.params.gameId;
  const gameObject = req.body;
  const gameData = await data.game.findOne({
    where: {
      id: gameId
    }
  });
  await gameData.update(gameObject);
  res.status(200).send(gameData);
}

async function destroy(req, res) {
  const gameId = req.params.gameId;
  await data.game.destroy({
    where:{
      id: gameId
    }
  });
  res.status(204).send('Deleted Item');
}


module.exports = router;
