const mongoose = require('mongoose');

const registerWasteSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
    default: '',
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Food Waste', 'Plastic', 'Paper', 'Metal', 'Glass', 'Other'], // You can customize this list
  },
  weight: {
    type: Number,
    required: true,
    min: 0,
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

const RegisterWaste = mongoose.model('RegisterWaste', registerWasteSchema);

module.exports = RegisterWaste;
