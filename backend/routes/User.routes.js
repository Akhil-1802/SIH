const express = require('express')
const router = express()
const {registerAadharController, registerWasteController,registerFamilyIDController, loginAadharController, loginFamilyIDController, complaintController, issueComplaintController} = require("../controllers/User.controller")
const upload = require('../middlewares/upload')
router.post('/registerAadhar',registerAadharController)
router.post('/registerFamilyID',registerFamilyIDController)
router.post('/loginAadhaar',loginAadharController)
router.post('/loginFamilyID',loginFamilyIDController)
router.post('/complaint', upload.single('photo'), complaintController);
router.post('/registerWaste',registerWasteController)
router.put('/complaint/:id',issueComplaintController)
module.exports = router