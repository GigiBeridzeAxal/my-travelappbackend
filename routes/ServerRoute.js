const express = require('express')
const { getturebi, postturebi } = require('../controllers/turebicontrollers')
const router = express.Router()

// Get Routes
router.get('/' , getturebi)


// Post Routes
router.post('/' , postturebi)



module.exports = router

