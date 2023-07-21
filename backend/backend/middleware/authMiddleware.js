const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; 
const authMiddleware = (req, res, next) => {
  
  const token = req.headers.authorization;

  // Check if the token is provided
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  try {
    // Verify the JWT and extract the user information
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach the user information to the request object
    next();
  } catch (err) {
    // If the JWT is invalid or has expired
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

module.exports = authMiddleware;
