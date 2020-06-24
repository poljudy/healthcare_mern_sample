const jwt = require('jsonwebtoken');
// const config = require('config');
// const config = process.env.jwtSecret

module.exports = function(req, res, next) {
  const jwtconfig = process.env.jwtSecret
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // const decoded = jwt.verify(token, config.get('jwtSecret'));
    const decoded = jwt.verify(token, jwtconfig);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
