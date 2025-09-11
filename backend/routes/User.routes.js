const express = require('express')
const router = express()
const {registerAadharController, registerFamilyIDController, loginAadharController, loginFamilyIDController} = require("../controllers/User.controller")
router.post('/registerAadhar',registerAadharController)
router.post('/registerFamilyID',registerFamilyIDController)
router.post('/loginAadhaar',loginAadharController)
router.post('/loginFamilyID',loginFamilyIDController)
module.exports = router