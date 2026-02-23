const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const ChatMessage = require('../models/ChatMessage');

router.post('/message', authMiddleware, async (req, res) => {
  const { message } = req.body;
  const msg = new ChatMessage({ userId: req.user.id, message });
  await msg.save();
  // Emit via socket
  res.json({ msg: 'Message saved' });
});

module.exports = router;