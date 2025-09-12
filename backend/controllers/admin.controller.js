const ComplaintModel = require('../models/Complaint.model');

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await ComplaintModel.find({});
    res.status(200).json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ message: "Server error fetching complaints" });
  }
};

module.exports = {
  getAllComplaints,
};