const User = require('../models/user');
const auth = require('./auth')

async function checkTelant(req, res, next) {

    try {
    if (req.auth && req.user &&  req.user.role === 'telant') {
      return next(); // user is telant, continue to the next middleware
    } 
    { return res.status(403).json({ message: 'You are not authorized to access this resource.'});}
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while checking user role.' });
  }

};

module.exports = checkTelant;
