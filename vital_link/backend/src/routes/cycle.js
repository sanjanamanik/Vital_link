const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const CycleLog = require('../models/CycleLog');

router.post('/log', authMiddleware, async (req, res) => {
  const { date } = req.body;
  const log = new CycleLog({ userId: req.user.id, date });
  await log.save();
  res.json({ msg: 'Logged' });
});

module.exports = router;