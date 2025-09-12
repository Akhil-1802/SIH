const express = require('express')
const router = express.Router()
const {getAllComplaints} = require('../controllers/admin.controller')
router.get('/complaints',getAllComplaints)
module.exports = router