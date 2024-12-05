const db = require('../models'); // Assuming you're using Sequelize or a similar ORM for the database

/**
 * Create a new user
 * @route POST /api/users
 * @description Create a new user and store it in the database
 * @access Public
 */
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Simple validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new user in the database
    const newUser = await db.User.create({
      name,
      email,
      password, // In a real-world app, you should hash the password before storing it
    });

    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, message: 'Failed to create user' });
  }
};

/**
 * Get user information by ID
 * @route GET /api/users/:id
 * @description Get user details by ID
 * @access Public
 */
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch user' });
  }
};

/**
 * Update user information by ID
 * @route PUT /api/users/:id
 * @description Update user details (e.g., name, email)
 * @access Public
 */
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user information
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password; // Again, you should hash the password in real scenarios

    await user.save();

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, message: 'Failed to update user' });
  }
};

/**
 * Delete a user by ID
 * @route DELETE /api/users/:id
 * @description Delete a user by ID
 * @access Public
 */
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, message: 'Failed to delete user' });
  }
};
