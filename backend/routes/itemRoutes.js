const express = require('express')
const router = express.Router()
const { getItem } = require('../controllers/itemControllers')

router.get('/:id', getItem)

module.exports = router