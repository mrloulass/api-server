'use strict';

const express = require('express');

const data = require('../models/index.js');

const router = express.Router();

router.get('/make', getAll);
router.get('/make/:makeId', getOne);
router.post('/make', create);
router.put('/make/:makeId', update);
router.delete('/make/:makeId', destroy);

async function getAll(req, res) {
  const makeItems = await data.make.findAll();
  res.status(200).send(makeItems);
}

async function create(req, res) {
  const makeObject = req.body;
  const makeData = await data.make.create(makeObject);
  res.status(200).send(makeData);
}

async function getOne(req, res) {
  const makeId = req.params.makeId;
  const makeItem = await data.make.findOne({
    where: {
      id: makeId
    }
  });
  res.status(200).send(makeItem);
}

async function update(req, res) {
  const makeId = req.params.makeId;
  const makeObject = req.body;
  const makeData = await data.make.findOne({
    where: {
      id: makeId
    }
  });
  await makeData.update(makeObject);
  res.status(200).send(makeData);
}

async function destroy(req, res) {
  const makeId = req.params.makeId;
  await data.make.destroy({
    where:{
      id: makeId
    }
  });
  res.status(204).send('Deleted Item');
}

module.exports = router;
