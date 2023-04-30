const User = require('../models/user');
const auth = require('../middlewhares/auth')

async function checkOwner(req, res, next) {

    try {
    if (req.auth && req.user &&  req.user.role === 'owner') {
      return next(); // user is owner, continue to the next middleware
    } 
    { return res.status(403).json({ message: 'You are not authorized to access this resource.'});}
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while checking user role.' });
  }

};

module.exports = checkOwner;