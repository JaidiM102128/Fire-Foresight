const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/', userController.createUser);

// Route to get user details by ID
router.get('/:id', userController.getUserById);

// Route to update user information by ID
router.put('/:id', userController.updateUser);

// Route to delete user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
