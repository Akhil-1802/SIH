const UserModel = require("../models/User.model");
const dbConnection = require("../utils/dbConnection");
const path = require("path");
const Complaint = require("../models/Complaint.model");
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
const complaintController = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, description, location } = req.body;
    let photoPath = null;

    if (!name || !email || !description) {
      return res
        .status(400)
        .json({ message: "Name, email and description are required" });
    }

    // If file uploaded, get its path
    if (req.file) {
      // save relative path or URL to DB
      photoPath = path.join("/uploads", req.file.filename); // You can change this according to your static folder serving
    }
    console.log(photoPath)
    let parsedLocation;
    if (location) {
      if (typeof location === "string") {
        try {
          parsedLocation = JSON.parse(location);
        } catch (err) {
          return res
            .status(400)
            .json({
              message: "Invalid location format, must be a JSON string",
            });
        }
      } else if (typeof location === "object") {
        parsedLocation = location;
      } else {
        return res.status(400).json({ message: "Invalid location type" });
      }
    }
    // Then save the complaint:
    const complaint = new Complaint({
      name: name,
      email: email,
      description: description,
      location: parsedLocation,
      photo: photoPath,
    });

    await complaint.save();

    res
      .status(201)
      .json({ message: "Complaint submitted successfully", complaint });
  } catch (error) {
    console.error("Error saving complaint:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerFamilyIDController,
  registerAadharController,
  loginAadharController,
  loginFamilyIDController,
  complaintController,
};
