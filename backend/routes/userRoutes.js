const express = require('express')
const router = express.Router()
const {
    loginUser,
    logoutCurrentUser,
    createUsers,
    getAllUsers,
    getCurrentUserProfile,
    updateCurrentUserProfile
} = require ('../controllers/userController.js')
const {authenticate, authorizeAdmin}  = require('../middlewares/authMiddleware');

//middlewares
const  auth = require('../middlewares/authMiddleware')

//controllers
router
  .route("/")
  .post(createUsers)
  .get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser)
router.post('/logout', logoutCurrentUser)
router.route('/profile').get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);
module.exports = router;