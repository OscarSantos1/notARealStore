const express = require('express')
const router = express.Router()
const { getUsers, registerUser, loginUser, getMe } = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

// GET USERS
router.get('/', getUsers)

// ADD USER
router.post('/', registerUser)

// AUTHENTICATE USER
router.post('/login', loginUser)

// CURRENT USER INFO
router.get('/me', protect, getMe)



module.exports = router