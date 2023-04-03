const express = require("express");
const router = express.Router();
const controller = require('../controllers/admin');
const checkAdmin = require('../middlewhares/checkAdmin')

// Creating a category 
router.post('/categories', checkAdmin, controller.createCategory);


// Updating a category
router.patch('/categories/:id', checkAdmin, controller.updatedCategory);


//Getting all categories
router.get('/categories', checkAdmin, controller.getAllCategories);


//Get a category
router.get('/categories/:id', checkAdmin, controller.getCategory);

 
// Delete a category
router.delete('/categories/:id', checkAdmin, controller.deletedCategory);


module.exports = router;