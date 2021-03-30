// Import requirement modules
const mongoose = require('mongoose');

// Create review schema
const ReviewSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    enum: ['Poor', 'Fair', 'Good', 'Very good', 'Perfect']
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    }
  ]
});

module.exports = mongoose.model('Reviews', ReviewSchema);