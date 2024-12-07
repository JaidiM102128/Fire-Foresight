const db = require('../config/db');
const bcrypt = require('bcrypt');

// Create a new user
exports.createUser = async (username, email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3) RETURNING *;
  `;
  const values = [username, email, hashedPassword];
  const result = await db.query(query, values);
  return result.rows[0]; // Return the newly created user
};

// Find user by email
exports.findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await db.query(query, [email]);
  return result.rows[0];
};
