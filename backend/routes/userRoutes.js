const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);  // Route to sign up a new user
router.post('/login', userController.login);    // Route to log in an existing user

module.exports = router;
