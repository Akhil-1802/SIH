const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  }
}, { _id: false });

const ComplaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: LocationSchema,
    required: false // optional
  },
  photo: {
    type: String, // storing base64 string or file path
    required: false
  },
  issue: {
    type: String,
    enum: ['Not Assigned', 'Assigned', 'Resolved'],
    default: 'Not Assigned'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
