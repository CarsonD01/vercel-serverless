const express = require('express');
const { isAuthenticated, hasRoles } = require('../middlewares/auth');
const Orders = require('../models/Orders');
const router = express.Router();

router.get('/', (req, res) => {
  Orders.find().then((x) => res.status(200).send(x));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Orders.findById(id).then((x) => res.status(200).send(x));
});

router.post('/', isAuthenticated, (req, res) => {
  const { _id } = req.user;
  const body = req.body;
  Orders.create({ ...body, userId: _id }).then((x) => res.status(201).send(x));
});

router.put('/:id', isAuthenticated, hasRoles(['user', 'admin']), (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Orders.findOneAndUpdate(id, body).then(() => res.sendStatus(204));
});

router.delete('/:id', isAuthenticated, (req, res) => {
  const id = req.params.id;
  Orders.findOneAndDelete(id).then(() => res.sendStatus(204));
});

module.exports = router;
