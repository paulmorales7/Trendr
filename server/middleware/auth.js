const config = require('config');
const jwt = require('jsonwebtoken');

// Exporting the authentification function
module.exports = function (req, res, next) {

  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Invalid Token' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('Something went wrong with middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};