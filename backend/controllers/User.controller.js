const UserModel = require("../models/User.model");
const dbConnection = require("../utils/dbConnection");
const path = require("path");
const Complaint = require("../models/Complaint.model");
function sendToAPI(pngDataURL) {
  // Create a Blob object from the data URL
  fetch(pngDataURL)
    .then((res) => res.blob())
    .then((blob) => {
      // Create a FormData object and append the PNG image file
      var formData = new FormData();
      formData.append("media", blob);
      formData.append(
        "models",
        "nudity-2.0,wad,offensive,text-content,face-attributes,gore,genai"
      );
      formData.append("api_user", "432766867");
      formData.append("api_secret", "gqDBf6rT8vTx87g3FBqaTp3Dmim3uatc");

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.sightengine.com/1.0/check.json", true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          console.log(response);
          displayOutput(response);
        } else {
          alert("Error occurred while uploading image.");
        }
      };
      xhr.send(formData);
    })
    .catch((error) => {
      console.error("Error converting image:", error);
    });
}
const registerAadharController = async (req, res) => {
  try {
    await dbConnection();
    console.log("hi");
    const {
      name: FullName,
      email: Email,
      phone: Phone,
      password: Password,
      address: Address,
      aadhaar: Aadhar,
      familyMembers: Family,
    } = req.body;
    // 1. Check if user with same Aadhar exists
    console.log(req.body);
    const userExists = await UserModel.findOne({ Aadhar });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already registered with this Aadhar." });
    }
    const userExistsInFamily = await UserModel.findOne({
      "Family.aadhaar": Aadhar,
    });
    if (userExistsInFamily) {
      return res.status(400).json({
        message: "User already registered with this Aadhar in Family.",
      });
    }
    // 2. Check if any family member's Aadhar exists as a user or as a family member
    for (const member of Family) {
      // Check if family member exists as a user
      const familyUser = await UserModel.findOne({ Aadhar: member.aadhaar });
      if (familyUser) {
        return res.status(400).json({
          message: `Family member with Aadhar ${member.aadhaar} is already registered as a user.`,
        });
      }

      // Check if family member exists in any user's Family array
      const familyInOther = await UserModel.findOne({
        "Family.aadhaar": member.aadhaar,
      });
      if (familyInOther) {
        return res.status(400).json({
          message: `Family member with Aadhar ${member.aadhaar} is already registered as a family member.`,
        });
      }
    }

    // 3. Create new user
    const newUser = new UserModel({
      FullName,
      Email,
      Phone,
      Address,
      Password,
      Aadhar,
      Family,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
const registerWasteController = async (req, res) => {
  try {
  } catch (error) {}
};
const registerFamilyIDController = async (req, res) => {
  try {
    await dbConnection();
    const {
      name: FullName,
      email: Email,
      phone: Phone,
      password: Password,
      address: Address,
      familyId: FamilyID,
      familyMembers: Family,
    } = req.body;
    // 1. Check if user with same Aadhar exists
    console.log(req.body);
    const userExists = await UserModel.findOne({ FamilyID });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already registered with this Aadhar." });
    }
    // 2. Check if any family member's Aadhar exists as a user or as a family member
    for (const member of Family) {
      // Check if family member exists as a user
      const familyUser = await UserModel.findOne({ Aadhar: member.aadhaar });
      if (familyUser) {
        return res.status(400).json({
          message: `Family member with Aadhar ${member.Aadhar} is already registered as a user.`,
        });
      }
      // Check if family member exists in any user's Family array
      const familyInOther = await UserModel.findOne({
        "Family.aadhaar": member.aadhaar,
      });
      if (familyInOther) {
        return res.status(400).json({
          message: `Family member with Aadhar ${member.aadhaar} is already registered as a family member.`,
        });
      }
    }

    // 3. Create new user
    const newUser = new UserModel({
      FullName,
      Email,
      Phone,
      Address,
      Password,
      FamilyID,
      Family,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const loginAadharController = async (req, res) => {
  try {
    await dbConnection();
    console.log(req.body);
    const { aadhaar, password } = req.body;

    if (!aadhaar || !password) {
      return res
        .status(400)
        .json({ message: "Aadhaar and password are required." });
    }

    // Find user by Aadhaar
    const user = await UserModel.findOne({ Aadhar: aadhaar });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with this Aadhaar." });
    }

    // Check password (plain text, for demo; use hashing in production)
    if (user.Password !== password) {
      return res.status(401).json({ message: "Invalid password or User." });
    }

    return res.status(200).json({ message: "Login successful.", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const loginFamilyIDController = async (req, res) => {
  try {
    await dbConnection();
    const { familyId, password } = req.body;

    if (!familyId || !password) {
      return res
        .status(400)
        .json({ message: "Family ID and password are required." });
    }

    // Find user by FamilyID
    const user = await UserModel.findOne({ FamilyID: familyId });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with this Family ID." });
    }

    // Check password (plain text, for demo; use hashing in production)
    if (user.Password !== password) {
      return res.status(401).json({ message: "Invalid password." });
    }

    return res.status(200).json({ message: "Login successful.", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
const axios = require('axios');
const fs = require('fs');


const complaintController = async (req, res) => {
  try {
    const { name, email, description, location } = req.body;

    if (!name || !email || !description) {
      return res.status(400).json({ message: "Name, email and description are required" });
    }

    let photoPath = null;

    // If a file was uploaded
    if (req.file) {
      photoPath = path.join("/uploads", req.file.filename);

      // Read the file from disk (assuming multer saves it locally)
      const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
      const fileStream = fs.createReadStream(filePath);

      // Prepare form-data for Sightengine API
      const FormData = require('form-data');
      const formData = new FormData();
      formData.append('media', fileStream);
      formData.append('models', 'nudity-2.0,wad,offensive,text-content,face-attributes,gore,genai');
      formData.append('api_user', process.env.SIGHTENGINE_USER);   // Put your credentials in .env
      formData.append('api_secret', process.env.SIGHTENGINE_SECRET);

      // Call Sightengine API
      const sightengineResponse = await axios.post(
        'https://api.sightengine.com/1.0/check.json',
        formData,
        { headers: formData.getHeaders() }
      );

      const moderationResult = sightengineResponse.data;

      // Check if nudity or other offensive content detected (example based on nudity score)
      if (moderationResult.nudity && moderationResult.nudity.raw > 0.5) {
        // Delete the uploaded file since it's inappropriate (optional)
        fs.unlink(filePath, (err) => {
          if (err) console.error('Error deleting file:', err);
        });
        return res.status(400).json({ message: "Uploaded image contains inappropriate content." });
      }
    }

    // Parse location if present
    let parsedLocation;
    if (location) {
      if (typeof location === "string") {
        try {
          parsedLocation = JSON.parse(location);
        } catch (err) {
          return res.status(400).json({
            message: "Invalid location format, must be a JSON string",
          });
        }
      } else if (typeof location === "object") {
        parsedLocation = location;
      } else {
        return res.status(400).json({ message: "Invalid location type" });
      }
    }

    // Save the complaint
    const complaint = new Complaint({
      name,
      email,
      description,
      location: parsedLocation,
      photo: photoPath,
    });

    await complaint.save();

    res.status(201).json({ message: "Complaint submitted successfully", complaint });

  } catch (error) {
    console.error("Error saving complaint:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const ComplaintModel = require("../models/Complaint.model");

const issueComplaintController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)

    // Update the complaint's issue field to "Assigned"
    const updatedComplaint = await ComplaintModel.findByIdAndUpdate(
      id,
      { issue: 'Assigned' },
      { new: true }
    );

    if (!updatedComplaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    res.status(200).json({
      message: 'Complaint assigned successfully',
      complaint: updatedComplaint
    });
  } catch (error) {
    console.error('Error assigning complaint:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
issueComplaintController,
  registerFamilyIDController,
  registerAadharController,
  loginAadharController,
  loginFamilyIDController,
  complaintController,
  registerWasteController,
  issueComplaintController
};
