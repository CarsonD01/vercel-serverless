const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.end('test')
});

router.get('/t1', (req, res) => {
  res.end('test-t1')
});

module.exports = router;
