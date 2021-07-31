const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.route('/signup').post(userController.signup)
router.route('/signin').post(userController.signin)

module.exports = router
