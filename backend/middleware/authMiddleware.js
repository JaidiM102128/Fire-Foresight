const jwt = require('jsonwebtoken');

// Middleware to check if the request has a valid JWT token
const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header (in the format "Bearer <token>")
  const token = req.header('Authorization')?.split(' ')[1];

  // If no token is provided, respond with an authentication error
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user data to the request object (req.user)
    req.user = decoded;

    // Proceed to the next middleware/controller
    next();
  } catch (err) {
    // If the token is invalid or expired, send an error response
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
