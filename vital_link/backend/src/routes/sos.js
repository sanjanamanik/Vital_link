const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const SOSAlert = require('../models/SOSAlert');

router.post('/alert', authMiddleware, async (req, res) => {
  const { location } = req.body;
  const alert = new SOSAlert({ userId: req.user.id, location });
  await alert.save();
  // Emit via socket in socket.js
  res.json({ msg: 'Alert sent' });
});

module.exports = router;