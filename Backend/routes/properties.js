const express = require("express");
const router = express.Router();
const controlTenant = require('../controllers/tenant');
const control = require('../controllers/owner');
const checkOwner = require('../middlewhares/checkOwner')
const checkTenant = require('../middlewhares/checkTelant')

// Add a property
router.post('/property', checkOwner, control.addProperty);


// Update a property 
router.patch('/properties/:id', checkOwner, control.updatedProperty);


// Delete a property 
router.delete('/properties/:id', checkOwner, control.deletedProperty);

//Getting all properties
router.get('/properties', checkTenant, controlTenant.getAllProperties);


//Get a property
router.get('/properties/search', checkTenant, controlTenant.getProperty);



module.exports = router;