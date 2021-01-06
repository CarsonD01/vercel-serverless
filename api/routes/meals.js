const express = require('express');
const Meals = require('../models/Meals');
const router = express.Router();

router.get('/', (req, res) => {
  Meals.find().then((x) => res.status(200).send(x));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Meals.findById(id).then((x) => res.status(200).send(x));
});

router.post('/', (req, res) => {
  const body = req.body;
  Meals.create(body).then((x) => res.status(201).send(x));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Meals.findOneAndUpdate(id, body).then(() => res.sendStatus(204));
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Meals.findOneAndDelete(id).then(() => res.sendStatus(204));
});

module.exports = router;
