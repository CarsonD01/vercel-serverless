const express = require('express');

const router = app.router();

router.get('/', (req, res) => {
  res.send('GET meals');
});

router.post('/', (req, res) => {
  res.send('POST meals');
});

module.exports = router;
