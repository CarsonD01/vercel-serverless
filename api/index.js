//const express = require('express');
//const mongoose = require('mongoose');
//const cors = require('cors');
//const meals = require('./routes/meals');
//const orders = require('./routes/orders');
//const users = require('./routes/users');
//const auth = require('./routes/auth');
//const test = require('./routes/test');

//const app = express();
//app.use(express.json());
//app.use(cors());

//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//app.use('/api/meals', meals);
//app.use('/api/orders', orders);
//app.use('/api/users', users);
//app.use('/api/auth', auth);
//app.use('/api/test', test);

const app = require('express')();
app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end('Hello! Go to item');
});
app.get('/api/item', (req, res) => {
  res.end('Item');
});

module.exports = app;
