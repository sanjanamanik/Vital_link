const mongoose = require('mongoose');

const sosAlertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SOSAlert', sosAlertSchema);