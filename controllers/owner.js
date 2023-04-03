const Property = require('../models/property');
const Category = require('../models/category');
const User = require('../models/user');
const nodemailer = require('nodemailer');

async function  addProperty (req, res) {

    const id_category = req.body.id_category

    try {
        const categoryExists = await Category.exists({ _id: id_category });
        if (!categoryExists) {
            
            throw new Error("Category does not exist");
        }

        const new_property = new Property({
            type: req.body.type,
            id_category: id_category,
            owner: req.body.owner,
            rooms: req.body.rooms,
            address: req.body.address,
            price: req.body.price,
        });

        const categoryUpdated = await Category.findByIdAndUpdate(
           id_category,
           {$inc: {number: 1}}, 
           {new: true}
        );
       
        await new_property.save();

        // Send notification email
        
        const transporter = nodemailer.createTransport({
            
            service: 'gmail',
            auth: {

                user: 'rfabrik7@gmail.com',
                pass: 'crfcwdtowhmogbqe'
            }
        });

        const tenants = await User.find({role: "tenant"});
        const tenantEmails = tenants.map(tenant => tenant.email);
  
        const mailOptions = {
            
            from: 'rfabrik7@gmail.com',
            to: tenantEmails,
            subject: 'New book added!',
            text: `A new property has been added: ${new_property.type} by ${new_property.owner}.`
        };

        await transporter.sendMail(mailOptions);

        res.send(new_property);
    } catch (err) {
        console.log(err);
    }
};

async function updatedProperty(req, res){
    try {
        const propertyUpdated = await Property.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(propertyUpdated);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }; 
};

async function deletedProperty(req, res){
    try {
        const PropertyDeleted = await Property.findByIdAndRemove(req.params.id); 
      if (PropertyDeleted) {
        res.json({ message: 'Property deleted with success' }); 
      } else {
        res.status(404).json({ message: 'No property found!!!!'}); 
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); 
    };
};


module.exports = {
    addProperty,
    updatedProperty,
    deletedProperty
};