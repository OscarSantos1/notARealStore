const express = require('express')
const router = express.Router()
const { sendConfirmation } = require('../controllers/emailControllers')
const { protect } = require('../middleware/authMiddleware')


router.post('/confirmation', protect, sendConfirmation)

module.exports = router