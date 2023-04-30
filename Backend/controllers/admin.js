const Property = require('../models/property');
const Category = require('../models/category');
const User = require('../models/user');

//* functions

async function getAllOwners (req, res) {
    try {
        const result = await User.find({role: "owner"});
        res.send(result);
    }

    catch (err) {
        console.log(err)
    }
};


async function getAllTenants (req, res) {
    try {
        const result = await User.find({role: "tenant"});
        res.send(result);
    }

    catch (err) {
        console.log(err)
    }
};


async function createCategory(req, res){
    let category = new Category({
        name: req.body.name,
        number: req.body.num_books,
    });
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    }  catch (err) {
        res.status(400).json({ message: err.message})
    }
};

async function getCategory (req, res) {
    try {
        const category = await Category.findById(req.params.id);
        res.send(category);
    }
    catch (err) {
        console.log(err);
    }
};

async function updatedCategory(req, res){
    try {
        const categoryUpdated = await Category.findByIdAndUpdate(req.params.id, req.body);
        res.json(categoryUpdated);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }; 
};

async function deletedCategory(req, res){
    try {
        const categoryDeleted = await Category.findByIdAndRemove(req.params.id); 
      if (categoryDeleted) {
        res.json({ message: 'Category deleted with success' }); 
      } else {
        res.status(404).json({ message: 'No category is found!!'}); 
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); 
    };
};

async function getAllCategories (req, res) {
    try {
        const result = await Category.find({});
        res.send(result);
    }

    catch (err) {
        console.log(err)
    }
};






module.exports = {
    getAllOwners,
    getAllTenants,
    createCategory,
    getCategory,
    updatedCategory,
    deletedCategory,
    getAllCategories
};