const express = require('express')
const router = express.Router()
const {getAllComplaints,getAssignedComplaints} = require('../controllers/admin.controller')
router.get('/complaints',getAllComplaints)
router.get('/complaintsAssigned',getAssignedComplaints)
module.exports = router