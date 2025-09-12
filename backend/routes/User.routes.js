const express = require('express')
const router = express()
const {registerAadharController, registerFamilyIDController, loginAadharController, loginFamilyIDController, complaintController} = require("../controllers/User.controller")
const upload = require('../middlewares/upload')
router.post('/registerAadhar',registerAadharController)
router.post('/registerFamilyID',registerFamilyIDController)
router.post('/loginAadhaar',loginAadharController)
router.post('/loginFamilyID',loginFamilyIDController)
router.post('/complaint', upload.single('photo'), complaintController);
module.exports = router