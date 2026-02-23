const mongoose = require('mongoose');

const cycleLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('CycleLog', cycleLogSchema);