const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

//controllers
router.post('/createUsers',  UserController.createUsers)

//middlewares


module.exports = router;