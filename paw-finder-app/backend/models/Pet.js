
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'bird', 'other'], // you can expand this
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // path or URL
    default: '',  // optional
  },
  status: {
    type: String,
    enum: ['lost', 'found'],
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Pet', petSchema);
