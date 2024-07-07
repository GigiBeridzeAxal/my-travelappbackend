const express = require('express')
const { getturebi, postturebi } = require('../controllers/turebicontrollers')
const router = express.Router()

// Get Routes



// Post Routes
router.post('/' , postturebi)
router.post('/getturebi', getturebi)



module.exports = router

