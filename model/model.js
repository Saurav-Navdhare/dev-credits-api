const mongoose = require('mongoose');

const devCredits = new mongoose.Schema({
  credits: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    default: 0
  },
});

module.exports = mongoose.model('devCredits', devCredits);