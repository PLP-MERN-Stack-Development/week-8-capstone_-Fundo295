
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // user, admin, etc.
  location: { type: String },              // city, area, etc.
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
