const express = require('express');
const router = express.Router();

const properties = require('./properties');
const categories = require('./categories');
const users = require('./users');


router.use('/properties', properties);
router.use('/categories', categories);
router.use('/users', users);



module.exports = router;