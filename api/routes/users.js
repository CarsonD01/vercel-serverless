const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

router.get('/', (req, res) => {
  Users.find().then((x) => res.status(200).send(x));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id).then((x) => res.status(200).send(x));
});

module.exports = router;
