const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'mySecret', (err, decoded) => {
    const { _id } = decoded;
    Users.findOne({ _id }).then((user) => {
      req.user = user;
      next();
    });
  });
};

module.exports = isAuthenticated;
