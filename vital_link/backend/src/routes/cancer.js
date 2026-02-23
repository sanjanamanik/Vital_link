const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Placeholder for cancer guidance API
router.get('/info', authMiddleware, (req, res) => {
  res.json({ guidance: 'Evidence-based cancer info' });
});

module.exports = router;