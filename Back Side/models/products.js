// Import required modules
const mongoose = require('mongoose');

// Create product Schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  countInStock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  numberOfReviews: {
    type: Number,
    default: 0
  },
  creatingDate: {
    type: Date,
    default: Date.now
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    }
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'reviews',
      required: true
    }
  ]
});

module.exports = mongoose.model('Products', ProductSchema);