const express = require("express");
const router = express.Router();
const controlAdmin = require('../controllers/admin');
const checkAdmin = require('../middlewhares/checkAdmin');

//Getting all owners
router.get('/owners', checkAdmin, controlAdmin.getAllOwners);


//Getting all owners
router.get('/telants', checkAdmin, controlAdmin.getAllTenants);


module.exports = router;