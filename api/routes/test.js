const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.end('test')
});

router.get('/1', (req, res) => {
  res.end('test1')
});

module.exports = router;
