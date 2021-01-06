const express = require('express');

const router = app.router();

router.get('/', (req, res) => {
  res.send('GET orders');
});

router.post('/', (req, res) => {
  res.send('POST orders');
});

module.exports = router;
